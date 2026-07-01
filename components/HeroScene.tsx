"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const NODE_COLORS = ["#7C9CFF", "#B894FF", "#4C7DFF"];

// Desktop frames the cluster off-center inside its narrow right-side panel.
// Mobile renders the same scene full-bleed and portrait, so it needs a
// centered cluster and a camera pulled back further to avoid clipping most
// of it off one edge of a tall, narrow viewport.
const VARIANTS = {
  desktop: { cameraZ: 6.2, fov: 45, groupOffsetX: 1.35 },
  mobile: { cameraZ: 9, fov: 50, groupOffsetX: 0 },
} as const;

type Node = {
  pos: THREE.Vector3;
  size: number;
  color: string;
  phase: number;
  speed: number;
};

function Constellation({
  count = 40,
  groupOffsetX = 1.35,
}: {
  count?: number;
  groupOffsetX?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // Auto-spin and pointer-tilt are tracked separately, then summed once per
  // frame. Mixing a continuously-incrementing value with an eased "move
  // toward target" on the same number causes them to fight each other.
  const autoRotation = useRef(0);
  const pointerOffset = useRef({ x: 0, y: 0 });

  // Auto-rotation and the node pulse are both driven by this clock, not by
  // pointer input — the scene has always animated on its own. Reduced-motion
  // is the one thing that should stop it (freeze in place, not disappear).
  const reduceMotion = useRef(false);

  const coreRefs = useRef<(THREE.Mesh | null)[]>([]);
  const glowRefs = useRef<(THREE.Mesh | null)[]>([]);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handleMove);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = mq.matches;
    const handleMotionPref = (e: MediaQueryListEvent) => {
      reduceMotion.current = e.matches;
    };
    mq.addEventListener("change", handleMotionPref);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      mq.removeEventListener("change", handleMotionPref);
    };
  }, []);

  const nodes = useMemo<Node[]>(() => {
    const pts: Node[] = [];
    for (let i = 0; i < count; i++) {
      const r = 2.3 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts.push({
        pos: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.65,
          r * Math.cos(phi) * 0.9
        ),
        size: 0.03 + Math.random() * 0.04,
        color: NODE_COLORS[i % NODE_COLORS.length],
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.7,
      });
    }
    return pts;
  }, [count]);

  const edges = useMemo(() => {
    const segments: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].pos.distanceTo(nodes[j].pos) < 1.85) {
          segments.push([nodes[i].pos, nodes[j].pos]);
        }
      }
    }
    return segments;
  }, [nodes]);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;

    if (!reduceMotion.current) {
      autoRotation.current += delta * 0.07;
      const targetX = pointer.current.y * 0.22;
      const targetY = pointer.current.x * 0.3;
      pointerOffset.current.x += (targetX - pointerOffset.current.x) * 0.05;
      pointerOffset.current.y += (targetY - pointerOffset.current.y) * 0.05;
    }
    group.current.rotation.x = pointerOffset.current.x;
    group.current.rotation.y = autoRotation.current + pointerOffset.current.y;

    // Each node breathes on its own phase/speed so the network reads as
    // active — resources and connections lighting up — rather than static.
    const t = clock.elapsedTime;
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const pulse = reduceMotion.current ? 1 : 0.75 + 0.45 * Math.sin(t * n.speed + n.phase);
      const core = coreRefs.current[i];
      const glow = glowRefs.current[i];
      if (core) core.scale.setScalar(pulse);
      if (glow) {
        glow.scale.setScalar(pulse * 1.5);
        const mat = glow.material as THREE.MeshBasicMaterial;
        mat.opacity = reduceMotion.current ? 0.2 : 0.14 + 0.16 * Math.sin(t * n.speed + n.phase);
      }
    }
  });

  return (
    <group ref={group} position={[groupOffsetX, 0, 0]}>
      {edges.map(([a, b], idx) => (
        <Line
          key={idx}
          points={[a, b]}
          color="#5B6CA8"
          transparent
          opacity={0.26}
          lineWidth={0.6}
        />
      ))}
      {nodes.map((n, idx) => (
        <group key={idx} position={n.pos}>
          {/* Soft halo — additive blending so overlapping glows read as light, not flat alpha */}
          <mesh ref={(el) => { glowRefs.current[idx] = el; }}>
            <sphereGeometry args={[n.size * 2.6, 12, 12]} />
            <meshBasicMaterial
              color={n.color}
              transparent
              opacity={0.2}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
          {/* Bright core */}
          <mesh ref={(el) => { coreRefs.current[idx] = el; }}>
            <sphereGeometry args={[n.size, 12, 12]} />
            <meshBasicMaterial color={n.color} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function HeroScene({
  nodeCount = 40,
  maxDpr = 1.5,
  variant = "desktop",
}: {
  nodeCount?: number;
  maxDpr?: number;
  variant?: keyof typeof VARIANTS;
}) {
  const { cameraZ, fov, groupOffsetX } = VARIANTS[variant];

  return (
    <Canvas
      dpr={[1, maxDpr]}
      camera={{ position: [0, 0, cameraZ], fov }}
      gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <Constellation count={nodeCount} groupOffsetX={groupOffsetX} />
    </Canvas>
  );
}

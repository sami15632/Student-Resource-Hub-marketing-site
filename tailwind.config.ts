import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05060B",
        surface: "#0B0D16",
        ink: "#EDEFF7",
        mist: "#8B92A8",
        haze: "#5A6178",
        signal: {
          DEFAULT: "#4C7DFF",
          soft: "#7C9CFF",
          dim: "#2C4FCC",
        },
        echo: {
          DEFAULT: "#9B6BFF",
          soft: "#B894FF",
          dim: "#6B3FCC",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.045)",
          border: "rgba(255,255,255,0.09)",
          hover: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-1":
          "radial-gradient(circle at 20% 20%, rgba(76,125,255,0.35), transparent 50%)",
        "aurora-2":
          "radial-gradient(circle at 80% 0%, rgba(155,107,255,0.30), transparent 50%)",
        "aurora-3":
          "radial-gradient(circle at 50% 100%, rgba(76,125,255,0.18), transparent 60%)",
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(76,125,255,0.25)",
        "glow-violet": "0 0 60px rgba(155,107,255,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(0.5deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "64px 64px" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "grid-drift": "grid-drift 12s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "scroll-x": "scroll-x 40s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

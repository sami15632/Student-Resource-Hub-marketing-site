export function OgCard() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#05060B",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: -220,
          left: -160,
          width: 760,
          height: 760,
          backgroundImage:
            "radial-gradient(circle, rgba(76,125,255,0.45) 0%, rgba(76,125,255,0) 70%)",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: -260,
          right: -160,
          width: 780,
          height: 780,
          backgroundImage:
            "radial-gradient(circle, rgba(155,107,255,0.42) 0%, rgba(155,107,255,0) 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "80px",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundImage: "linear-gradient(135deg, #4C7DFF, #9B6BFF)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 700, color: "#FFFFFF" }}>S</span>
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, color: "#EDEFF7", letterSpacing: "-0.01em" }}>
            Student Resource Hub
          </span>
        </div>

        <div style={{ display: "flex", marginTop: 54 }}>
          <span
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: "#F7F8FF",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Learn. Share. Grow.
          </span>
        </div>

        <div style={{ display: "flex", marginTop: 26, maxWidth: 760 }}>
          <span style={{ fontSize: 29, color: "#8B92A8", lineHeight: 1.4 }}>
            Free study notes, past exams, and programming resources for students worldwide.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 54 }}>
          <span style={{ fontSize: 22, color: "#7C9CFF", fontWeight: 600 }}>10K+ resources</span>
          <div style={{ display: "flex", width: 6, height: 6, borderRadius: 999, backgroundColor: "#5A6178" }} />
          <span style={{ fontSize: 22, color: "#7C9CFF", fontWeight: 600 }}>10+ universities</span>
          <div style={{ display: "flex", width: 6, height: 6, borderRadius: 999, backgroundColor: "#5A6178" }} />
          <span style={{ fontSize: 22, color: "#7C9CFF", fontWeight: 600 }}>Free, always</span>
        </div>
      </div>
    </div>
  );
}

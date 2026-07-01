import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #4C7DFF, #9B6BFF)",
          borderRadius: 40,
        }}
      >
        <span style={{ fontSize: 96, fontWeight: 700, color: "#FFFFFF" }}>S</span>
      </div>
    ),
    { ...size }
  );
}

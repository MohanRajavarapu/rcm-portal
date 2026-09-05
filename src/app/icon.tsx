import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#14343d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e8c37a",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        360
      </div>
    ),
    size,
  );
}

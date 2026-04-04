import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";

export const alt = `${site.displayName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #070b12 0%, #0c1222 45%, #1e5f5f 100%)",
          padding: 56,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#fffdf9",
            letterSpacing: "-0.03em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {site.displayName}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#c4a574",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,253,249,0.78)",
            marginTop: 32,
            maxWidth: 920,
            textAlign: "center",
            lineHeight: 1.45,
          }}
        >
          {site.tagline.length > 160 ? `${site.tagline.slice(0, 157)}…` : site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}

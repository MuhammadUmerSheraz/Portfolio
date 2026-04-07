import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/content/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

function guessMime(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  return "image/png";
}

/** Loads `public` headshot for OG generation (Node runtime only). */
export async function getProfilePhotoDataUri(): Promise<string | null> {
  const rel = site.photo.src.replace(/^\//, "");
  const filePath = path.join(process.cwd(), "public", rel);
  try {
    const buf = await readFile(filePath);
    return `data:${guessMime(rel)};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export function getOgImageAlt(): string {
  return `${site.displayName} — ${site.role}`;
}

function initials(): string {
  const parts = site.displayName.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]![0] ?? ""}${parts[parts.length - 1]![0] ?? ""}`.toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

/** 1200×630 card: photo (or initials) + name / role / SEO blurb — used for WhatsApp, LinkedIn, X, iMessage. */
export async function createPortfolioShareImageResponse() {
  const photo = await getProfilePhotoDataUri();
  const blurb =
    site.seoDescription.length > 200 ? `${site.seoDescription.slice(0, 197)}…` : site.seoDescription;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          background: "linear-gradient(110deg, #070b12 0%, #0c1222 48%, #143838 100%)",
        }}
      >
        <div
          style={{
            width: 440,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30, 95, 95, 0.2)",
            padding: 48,
          }}
        >
          {photo ? (
            <img
              src={photo}
              alt=""
              width={336}
              height={336}
              style={{
                borderRadius: 32,
                objectFit: "cover",
                border: "4px solid rgba(196, 165, 116, 0.5)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
              }}
            />
          ) : (
            <div
              style={{
                width: 336,
                height: 336,
                borderRadius: 32,
                background: "linear-gradient(145deg, #1e5f5f, #2d7a7a)",
                border: "4px solid rgba(196, 165, 116, 0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 96,
                fontWeight: 700,
                color: "#fffdf9",
                letterSpacing: "-0.04em",
              }}
            >
              {initials()}
            </div>
          )}
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "52px 52px 52px 28px",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: "#fffdf9",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.displayName}
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#c4a574", lineHeight: 1.25 }}>{site.role}</div>
          <div
            style={{
              fontSize: 21,
              color: "rgba(255,253,249,0.85)",
              lineHeight: 1.45,
              marginTop: 6,
              maxWidth: 700,
            }}
          >
            {blurb}
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}

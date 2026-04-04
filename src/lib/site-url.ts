/**
 * Canonical site origin for metadata, sitemap, and JSON-LD (server-side only).
 *
 * On Vercel with a custom domain: set NEXT_PUBLIC_SITE_URL to that domain (e.g. https://yourname.com).
 * Otherwise VERCEL_URL is used and stays *.vercel.app — fine for previews, wrong for public SEO.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3020";
}

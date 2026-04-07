import {
  createPortfolioShareImageResponse,
  getOgImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-share-image";

export const alt = getOgImageAlt();
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function TwitterImage() {
  return createPortfolioShareImageResponse();
}

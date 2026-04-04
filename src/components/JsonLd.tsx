import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

/** Person + WebSite structured data for rich results. */
export function JsonLd() {
  const base = getSiteUrl();
  const person = {
    "@type": "Person",
    name: site.displayName,
    alternateName: site.legalName,
    jobTitle: site.role,
    description: site.seoDescription,
    url: base,
    image: `${base}${site.photo.src}`,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: site.skillCategories.map((c) => c.title),
  };

  const website = {
    "@type": "WebSite",
    name: `${site.displayName} — Portfolio`,
    description: site.seoDescription,
    url: base,
    author: { "@type": "Person", name: site.displayName },
    inLanguage: "en",
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

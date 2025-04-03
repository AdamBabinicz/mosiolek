import { MetaTag, SEOProps } from "@/types";

export const generateMetaTags = ({
  title,
  description,
  canonical,
  imageUrl,
  type = "website",
}: SEOProps): MetaTag[] => {
  const metaTags: MetaTag[] = [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
  ];

  if (canonical) {
    metaTags.push({ property: "og:url", content: canonical });
  }

  if (imageUrl) {
    metaTags.push({ property: "og:image", content: imageUrl });
  }

  return metaTags;
};

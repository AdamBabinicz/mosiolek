export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  lang?: string;
  meta?: MetaTag[];
  imageUrl?: string;
  type?: string;
}

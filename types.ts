export interface HeroSectionData {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  videoURL?: string;
  imageURL?: string;
}

export interface AboutSectionData {
  title: string;
  description: string[];
  callToAction: string;
  features: string[];
  ticketUrl: string;
  googleCalendarLink: string;
}

export interface GalleryItem {
  src: string; // Used for video poster or image source
  alt: string;
  videoSrc?: string; // Video source is optional for user-uploaded images
}

export interface GallerySectionData {
  title: string;
  items: GalleryItem[];
}

export interface Performer {
  name: string;
  info: string;
  imageUrl?: string;
}

export interface Artist {
  floor: string;
  genre: string;
  performers: Performer[];
}

export interface LiveBand {
  name: string;
  info: string;
  imageUrl: string;
}

export interface SoundsSectionData {
  title: string;
  description: string;
  liveBand?: LiveBand;
  artists: Artist[];
}

export interface CtaSectionData {
  title: string;
  description: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface PageData {
  pageTitle: string;
  heroSection: HeroSectionData;
  aboutSection: AboutSectionData;
  gallerySection: GallerySectionData;
  soundsSection: SoundsSectionData;
  ctaSection: CtaSectionData;
  socialMedia: SocialMediaLink[];
}
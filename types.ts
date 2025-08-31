
export interface HeroSectionData {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  videoURL: string;
}

export interface AboutSectionData {
  title: string;
  description: string[];
  callToAction: string;
  features: string[];
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
  soundsSection: SoundsSectionData;
  ctaSection: CtaSectionData;
  socialMedia: SocialMediaLink[];
}
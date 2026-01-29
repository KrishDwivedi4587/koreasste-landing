export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: string;
}

export interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export enum BrandTheme {
  LIFESTYLE = 'LIFESTYLE',
  BEAUWELL = 'BEAUWELL',
  NEUTRAL = 'NEUTRAL'
}
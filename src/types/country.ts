export type Continent =
  "Africa" | "Europe" | "North America" | "South America" | "Asia" | "Oceania";

export interface Country {
  name: string;
  shortInfo: string;
  image: string;
  continent: Continent;
  capital: string;
  language: string;
  population: number;
  totalArea: number;
}

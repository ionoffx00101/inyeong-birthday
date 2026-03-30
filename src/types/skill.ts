export type Category = "Android" | "iOS" | "Frontend" | "CrossPlatform";

export interface Skill {
  name: string;
  level: number;
  category: Category;
}

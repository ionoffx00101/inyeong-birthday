import type { Category, Skill } from "@/types/skill";

export const LEVEL = {
  학습: 33,
  실무: 66,
  런칭: 100,
} as const;

export const LEVEL_LABELS: Record<number, string> = {
  33: "학습",
  66: "실무",
  100: "런칭",
};

export const CATEGORY_META: Record<Category, { label: string; color: string }> = {
  Android:       { label: "Android",        color: "#22c55e" },
  iOS:           { label: "iOS",            color: "#f97316" },
  Frontend:      { label: "Frontend",       color: "#3b82f6" },
  CrossPlatform: { label: "Cross Platform", color: "#a855f7" },
};

export const skills: Skill[] = [
  { name: "Kotlin",          level: LEVEL.런칭, category: "Android" },
  { name: "Java",            level: LEVEL.런칭, category: "Android" },
  { name: "XML Layout",      level: LEVEL.런칭, category: "Android" },
  { name: "Jetpack Compose", level: LEVEL.실무, category: "Android" },
  { name: "Swift",           level: LEVEL.런칭, category: "iOS" },
  { name: "UIKit",           level: LEVEL.런칭, category: "iOS" },
  { name: "SwiftUI",         level: LEVEL.실무, category: "iOS" },
  { name: "React",           level: LEVEL.런칭, category: "Frontend" },
  { name: "TypeScript",      level: LEVEL.런칭, category: "Frontend" },
  { name: "Next.js",         level: LEVEL.실무, category: "Frontend" },
  { name: "React Native",    level: LEVEL.런칭, category: "CrossPlatform" },
  { name: "Flutter",         level: LEVEL.실무, category: "CrossPlatform" },
];

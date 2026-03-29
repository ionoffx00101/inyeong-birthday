import { Smartphone, Tablet, Globe, Layers, Link2, Rocket, Wrench } from "lucide-react";
import type { Highlight } from "@/types/highlight";

export const highlights: Highlight[] = [
  { icon: Smartphone, text: "안드로이드 개발 경험" },
  { icon: Tablet,     text: "iOS 개발 경험" },
  { icon: Globe,      text: "React 개발 경험" },
  { icon: Layers,     text: "React Native 개발 경험" },
  { icon: Link2,      text: "React Webview 기반 하이브리드 앱 개발 경험" },
  { icon: Rocket,     text: "신규 프로젝트 기획 → 스토어 출시 전체 생명주기 경험" },
  { icon: Wrench,     text: "레거시 프로젝트의 유지보수 및 리팩터링 경험" },
];

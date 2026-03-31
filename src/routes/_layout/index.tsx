import { createFileRoute } from "@tanstack/react-router";
import { Mail, BookOpen, GitPullRequestArrow } from "lucide-react";
import { SkillBars } from "@/components/home/SkillChart";
import { highlights } from "@/data/highlights";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="w-full mx-auto flex flex-col gap-10 py-6 px-2">
        <div className="flex flex-col gap-4 pt-1">
            <div>
              <p className="text-xs text-base-content/40 uppercase tracking-widest mb-1">
                Frontend Developer
              </p>
              <h1 className="text-3xl font-bold">황인영</h1>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:ionoffx@gmail.com"
                className="flex items-center gap-1.5 text-xs text-base-content/50 hover:text-primary transition-colors"
              >
                <Mail size={13} />
                ionoffx@gmail.com
              </a>
              <span className="text-base-content/20">·</span>
              <a
                href="https://github.com/ionoffx00101"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-base-content/50 hover:text-primary transition-colors"
              >
                <GitPullRequestArrow size={13} />
                GitHub
              </a>
              <span className="text-base-content/20">·</span>
              <a
                href="https://teqoo.tistory.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-base-content/50 hover:text-primary transition-colors"
              >
                <BookOpen size={13} />
                Blog
              </a>
            </div>

            <div className="divider my-0" />

            <div className="flex items-center gap-4">
              <ul className="flex flex-col gap-2.5 flex-1">
                {highlights.map((h) => (
                  <li
                    key={h.text}
                    className="flex items-start gap-2 text-sm text-base-content/70"
                  >
                    <h.icon
                      size={15}
                      className="mt-0.5 shrink-0 text-base-content/40"
                    />
                    <span>{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>

        <div className="flex flex-col gap-4">
          <SkillBars />
        </div>
      </div>
    </div>
  );
}

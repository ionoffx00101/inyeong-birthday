import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CircleDot, X } from "lucide-react";
import { projects } from "@/data/career";
import type { Project } from "@/types/career";

export const Route = createFileRoute("/_layout/about/")({
  component: AboutPage,
});

function getYear(period: string) {
  return period.split(".")[0];
}

function AboutPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="flex h-full gap-4 overflow-hidden">
      {/* Left: Timeline */}
      <div className="w-1/2 shrink-0 overflow-y-auto">
        <ul className="timeline timeline-vertical [&>li]:grid-cols-[auto_auto_1fr] [&_.timeline-box]:min-w-80">
          {[...projects].reverse().map((project, idx, arr) => {
            const isSelected = selected?.name === project.name;
            const isLast = idx === arr.length - 1;
            const year = getYear(project.period);
            const prevYear = idx > 0 ? getYear(arr[idx - 1].period) : null;
            const showYear = year !== prevYear;

            return (
              <li key={project.name}>
                {idx !== 0 && <hr />}

                <div className="timeline-start min-w-[3rem] text-xs text-base-content/50 font-mono pr-2">
                  {showYear ? year : ""}
                </div>

                <div className="timeline-middle">
                  <CircleDot
                    className={`h-5 w-5 transition-colors ${isSelected ? "text-primary" : "text-base-content/30"}`}
                  />
                </div>

                <div
                  className={`timeline-end timeline-box mb-4 cursor-pointer transition-all py-5 ${
                    isSelected
                      ? "border-primary bg-primary/10 shadow-md"
                      : "hover:bg-base-300 hover:shadow-sm"
                  }`}
                  onClick={() => setSelected(isSelected ? null : project)}
                >
                  <p className="font-bold text-base leading-snug">{project.name}</p>
                  <p className="text-xs text-base-content/40 mt-1">{project.period}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.platforms.map((platform) => (
                      <span key={platform} className="badge badge-sm badge-ghost">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {!isLast && <hr />}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: Detail panel */}
      <div className="w-1/2 shrink-0 overflow-y-auto">
        {selected ? (
          <div className="rounded-2xl bg-base-200 p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">{selected.name}</h2>
                <p className="mt-0.5 text-sm text-base-content/50">
                  {selected.period}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm btn-circle shrink-0"
                onClick={() => setSelected(null)}
              >
                <X size={16} />
              </button>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-base-content/80 whitespace-pre-line">
              {selected.description}
            </p>

            <div className="mb-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-base-content/40">
                역할
              </p>
              <p className="text-sm">{selected.role}</p>
            </div>

            {selected.details.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-base-content/40">
                  담당 업무
                </p>
                <div className="flex flex-col gap-5">
                  {selected.details.map((detail) => (
                    <div key={detail.platform}>
                      <div className="mb-2 flex items-baseline gap-2">
                        <p className="text-xs font-semibold text-primary">
                          {detail.platform}
                        </p>
                        {detail.description && (
                          <p className="text-xs text-base-content/40">{detail.description}</p>
                        )}
                      </div>
                      {detail.techStack.length > 0 && (
                        <div className="mb-2 flex flex-wrap gap-1">
                          {detail.techStack.map((tech) => (
                            <span key={tech} className="badge badge-outline badge-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      <ul className="flex flex-col gap-1.5 pl-2">
                        {detail.items.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-base-content/70">
                            <span className="shrink-0 text-base-content/30">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-base-content/30 text-sm">
            프로젝트를 선택하면 상세 내용이 표시됩니다
          </div>
        )}
      </div>
    </div>
  );
}

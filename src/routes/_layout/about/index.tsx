import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CircleDot, X, Briefcase, Clock, FileText } from "lucide-react";
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
    <div className="flex h-full gap-6 overflow-hidden">
      <div className="w-1/2 shrink-0 overflow-y-auto pr-1">
        <ul className="timeline timeline-vertical [&>li]:grid-cols-[auto_auto_1fr] [&_.timeline-box]:min-w-94">
          {[...projects].reverse().map((project, idx, arr) => {
            const isSelected = selected?.name === project.name;
            const isLast = idx === arr.length - 1;
            const year = getYear(project.period);
            const prevYear = idx > 0 ? getYear(arr[idx - 1].period) : null;
            const showYear = year !== prevYear;

            return (
              <li key={project.name}>
                {idx !== 0 && <hr />}

                <div className="timeline-start min-w-16 pr-2 text-right">
                  {showYear && (
                    <span className="text-sm font-bold text-primary">
                      {year}
                    </span>
                  )}
                </div>

                <div className="timeline-middle">
                  <CircleDot
                    className={`h-4 w-4 transition-colors duration-200 ${
                      isSelected ? "text-primary" : "text-base-content/20"
                    }`}
                  />
                </div>

                <div
                  className={`timeline-end timeline-box mb-4 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "border-primary/40 bg-primary/8 shadow-md shadow-primary/10"
                      : "hover:border-base-content/20 hover:shadow-sm"
                  }`}
                  onClick={() => setSelected(isSelected ? null : project)}
                >
                  <p className="font-semibold text-base leading-snug">
                    {project.name}
                  </p>
                  <p className="mt-1.5 text-xs text-base-content/40">
                    {project.period}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
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
            {/* Header */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold leading-snug">{selected.name}</h2>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-base-content/40">
                  <Clock size={14} className="shrink-0" />
                  <span>{selected.period}</span>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm btn-circle shrink-0"
                onClick={() => setSelected(null)}
              >
                <X size={16} />
              </button>
            </div>

            {/* Description */}
            <div className="mb-5 flex items-start gap-2">
              <FileText size={14} className="mt-1 shrink-0 text-base-content/30" />
              <p className="text-sm leading-relaxed text-base-content/70 whitespace-pre-line">
                {selected.description}
              </p>
            </div>

            {/* Role */}
            <div className="mb-5 flex items-center gap-2">
              <Briefcase size={14} className="shrink-0 text-base-content/30" />
              <p className="text-sm text-base-content/70">{selected.role}</p>
            </div>

            {/* Details */}
            {selected.details.length > 0 && (
              <div className="flex flex-col gap-4">
                {selected.details.map((detail) => (
                  <div
                    key={detail.platform}
                    className="border-l-2 border-primary/30 pl-4"
                  >
                    {/* Platform + description */}
                    <div className="mb-3 flex items-baseline gap-2">
                      <p className="text-sm font-bold text-primary tracking-wide">
                        {detail.platform}
                      </p>
                      {detail.description && (
                        <p className="text-xs text-base-content/40">{detail.description}</p>
                      )}
                    </div>

                    {/* TechStack */}
                    {detail.techStack.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {detail.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="badge badge-sm badge-primary badge-outline opacity-80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Items */}
                    <ul className="flex flex-col gap-2">
                      {detail.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-base-content/65 leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-base-content/25" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-base-content/25">
            <CircleDot size={28} />
            <p className="text-sm">프로젝트를 선택하면 상세 내용이 표시됩니다</p>
          </div>
        )}
      </div>
    </div>
  );
}

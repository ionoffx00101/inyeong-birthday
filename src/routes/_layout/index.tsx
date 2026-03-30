import { createFileRoute } from "@tanstack/react-router";
import ImageInyeong from "@/assets/about/inyeong.jpg";
import { SkillBars } from "@/components/home/SkillChart";
import { highlights } from "@/data/highlights";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="w-full mx-auto flex flex-col gap-10 py-6 px-2">
        <div className="grid grid-cols-[200px_1fr] gap-6 items-start">
          <div className="flex flex-col items-center gap-3">
            <div className="w-full overflow-hidden">
              <img
                src={ImageInyeong}
                alt="황인영 프로필"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-1">
            <div>
              <p className="text-xs text-base-content/40 uppercase tracking-widest mb-1">
                Frontend Developer
              </p>
              <h1 className="text-3xl font-bold">황인영</h1>
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
        </div>

        <div className="flex flex-col gap-4">
          <SkillBars />
        </div>
      </div>
    </div>
  );
}

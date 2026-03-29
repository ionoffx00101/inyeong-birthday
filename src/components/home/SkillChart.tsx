import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import type { Category } from "@/types/skill";
import { LEVEL_LABELS, CATEGORY_META, skills } from "@/data/skills";

export function SkillBars() {
  const categories = Object.keys(CATEGORY_META) as Category[];

  return (
    <div className="grid grid-cols-2 gap-6">
      {categories.map((cat) => {
        const data = skills.filter((s) => s.category === cat);
        const { color, label } = CATEGORY_META[cat];
        return (
          <div key={cat} className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: color }}
              />
              <span className="text-xs uppercase tracking-widest text-base-content/40">
                {label}
              </span>
            </div>

            <ResponsiveContainer width="100%" height={data.length * 44}>
              <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 0, right: 36, left: 72, bottom: 0 }}
                barSize={14}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="currentColor"
                  strokeOpacity={0.08}
                />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  ticks={[33, 66, 100]}
                  tick={{ fontSize: 10, fill: "currentColor", opacity: 0.35 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => LEVEL_LABELS[v] ?? ""}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 12, fill: "currentColor", opacity: 0.75 }}
                  tickLine={false}
                  axisLine={false}
                  width={68}
                />
                <Bar dataKey="level" fill={color} radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </div>
  );
}

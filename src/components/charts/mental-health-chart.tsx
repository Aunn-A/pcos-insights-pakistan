"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  CHART_COLORS,
  tooltipContentStyle,
  tooltipLabelStyle,
} from "@/lib/chart-theme";

const data = [
  { dimension: "Anxiety", value: 57 },
  { dimension: "Low mood", value: 49 },
  { dimension: "Body image concern", value: 63 },
  { dimension: "Sleep disruption", value: 44 },
  { dimension: "Social withdrawal", value: 33 },
];

export function MentalHealthChart({ height = 300 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke={CHART_COLORS.line} />
        <PolarAngleAxis
          dataKey="dimension"
          tick={{ fill: CHART_COLORS.caption, fontSize: 12 }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: CHART_COLORS.caption, fontSize: 10 }}
          tickCount={5}
          axisLine={false}
        />
        <Tooltip
          contentStyle={tooltipContentStyle}
          labelStyle={tooltipLabelStyle}
          formatter={(value) => [`${value}%`, "Moderate–severe"]}
        />
        <Radar
          dataKey="value"
          stroke={CHART_COLORS.viz1}
          fill={CHART_COLORS.viz1}
          fillOpacity={0.22}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

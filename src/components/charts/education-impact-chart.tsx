"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  CHART_COLORS,
  chartTickStyle,
  tooltipContentStyle,
  tooltipLabelStyle,
} from "@/lib/chart-theme";

const data = [
  { category: "Difficulty concentrating in class", value: 64 },
  { category: "Missed 3+ school days a month", value: 58 },
  { category: "Withdrew from extracurriculars", value: 41 },
  { category: "Considered pausing education", value: 22 },
];

const colors = [
  CHART_COLORS.viz1,
  CHART_COLORS.viz5,
  CHART_COLORS.viz2,
  CHART_COLORS.viz6,
];

export function EducationImpactChart({ height = 280 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 4, right: 32, left: 8, bottom: 0 }}
      >
        <CartesianGrid horizontal={false} stroke={CHART_COLORS.line} />
        <XAxis
          type="number"
          domain={[0, 100]}
          tick={chartTickStyle}
          tickLine={false}
          axisLine={{ stroke: CHART_COLORS.line }}
          unit="%"
        />
        <YAxis
          type="category"
          dataKey="category"
          tick={{ ...chartTickStyle, fontFamily: "var(--font-sans)" }}
          tickLine={false}
          axisLine={false}
          width={190}
        />
        <Tooltip
          contentStyle={tooltipContentStyle}
          labelStyle={tooltipLabelStyle}
          formatter={(value) => [`${value}%`, "Self-reported"]}
          cursor={{ fill: "rgba(91,58,142,0.05)" }}
        />
        <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={22}>
          {data.map((entry, i) => (
            <Cell key={entry.category} fill={colors[i % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

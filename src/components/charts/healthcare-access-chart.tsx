"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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
  { category: "Gynecologist", full: "Gynecologist access", Urban: 74, Rural: 31 },
  { category: "Endocrinologist", full: "Endocrinologist access", Urban: 52, Rural: 12 },
  { category: "Ultrasound", full: "Ultrasound availability", Urban: 81, Rural: 24 },
  { category: "Treatment", full: "Afford ongoing treatment", Urban: 46, Rural: 19 },
];

export function HealthcareAccessChart({ height = 300 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        margin={{ top: 8, right: 12, left: -16, bottom: 0 }}
        barGap={6}
      >
        <CartesianGrid vertical={false} stroke={CHART_COLORS.line} />
        <XAxis
          dataKey="category"
          tick={chartTickStyle}
          tickLine={false}
          axisLine={{ stroke: CHART_COLORS.line }}
          tickMargin={10}
        />
        <YAxis
          tick={chartTickStyle}
          tickLine={false}
          axisLine={false}
          width={40}
          unit="%"
        />
        <Tooltip
          contentStyle={tooltipContentStyle}
          labelStyle={tooltipLabelStyle}
          formatter={(value, name) => [`${value}%`, name]}
          labelFormatter={(_, payload) => payload?.[0]?.payload?.full ?? ""}
        />
        <Legend
          wrapperStyle={{
            fontSize: 13,
            fontFamily: "var(--font-sans)",
            color: CHART_COLORS.caption,
            paddingTop: 12,
          }}
        />
        <Bar dataKey="Urban" fill={CHART_COLORS.viz1} radius={[6, 6, 0, 0]} />
        <Bar dataKey="Rural" fill={CHART_COLORS.viz2} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

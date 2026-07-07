"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
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
  { stage: "Onset", full: "Symptom onset", months: 0 },
  { stage: "1st visit", full: "First consultation", months: 8 },
  { stage: "Referral", full: "Specialist referral", months: 18 },
  { stage: "Diagnosis", full: "Diagnosis confirmed", months: 27 },
  { stage: "Treatment", full: "Treatment plan started", months: 33 },
];

export function DiagnosisJourneyChart({ height = 300 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 12, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="diagnosisFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART_COLORS.viz1} stopOpacity={0.22} />
            <stop offset="100%" stopColor={CHART_COLORS.viz1} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke={CHART_COLORS.line} />
        <XAxis
          dataKey="stage"
          tick={chartTickStyle}
          tickLine={false}
          axisLine={{ stroke: CHART_COLORS.line }}
          interval={0}
          tickMargin={10}
        />
        <YAxis
          tick={chartTickStyle}
          tickLine={false}
          axisLine={false}
          width={40}
          unit="mo"
        />
        <Tooltip
          contentStyle={tooltipContentStyle}
          labelStyle={tooltipLabelStyle}
          formatter={(value) => [`${value} months`, "Cumulative time"]}
          labelFormatter={(_, payload) => payload?.[0]?.payload?.full ?? ""}
        />
        <Area
          type="monotone"
          dataKey="months"
          stroke={CHART_COLORS.viz1}
          strokeWidth={2}
          fill="url(#diagnosisFill)"
          dot={{ r: 4, fill: CHART_COLORS.viz1, strokeWidth: 0 }}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

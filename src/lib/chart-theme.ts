import type { CSSProperties } from "react";

export const CHART_COLORS = {
  viz1: "#5b3a8e",
  viz2: "#2c6e8f",
  viz3: "#3f8672",
  viz4: "#b4531f",
  viz5: "#a98cc9",
  viz6: "#8f8a9c",
  line: "#e7e1f0",
  caption: "#6b6675",
};

export const chartTickStyle = {
  fill: CHART_COLORS.caption,
  fontSize: 12,
  fontFamily: "var(--font-mono)",
};

export const tooltipContentStyle: CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e7e1f0",
  borderRadius: 12,
  padding: "10px 14px",
  boxShadow: "0 8px 24px rgba(91,58,142,0.12)",
  fontSize: 13,
};

export const tooltipLabelStyle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  color: "#2c2c2c",
  marginBottom: 4,
  fontWeight: 500,
};

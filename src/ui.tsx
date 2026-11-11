import type React from "react";

// Mint → blue gradient used for the italic accent word, as in the design system hero.
export const accentText: React.CSSProperties = {
  fontStyle: "italic",
  backgroundImage: "linear-gradient(90deg, #42FFCA 0%, #118DF0 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  paddingRight: 12,
};

export const Accent: React.FC<{ readonly children: React.ReactNode }> = ({
  children,
}) => <span style={accentText}>{children}</span>;

// Overline marker: short mint rule that precedes section labels.
export const OverlineRule: React.FC = () => (
  <span
    style={{
      display: "inline-block",
      width: 56,
      height: 3,
      borderRadius: 3,
      backgroundColor: "#42FFCA",
      marginRight: 24,
      verticalAlign: "middle",
    }}
  />
);

export const theme = {
    colors: {
    black: "#0D0D0D",
    purple: "#6A0DAD",
    white: "#F5F5F7",
  },
} as const;

export type Theme = typeof theme;
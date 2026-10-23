export const colors = {
  background: "#FFF8E7",
  surface: "#FFFFFF",
  surfaceMuted: "#F3E8D5",

  text: "#252525",
  textMuted: "#686868",

  primary: "#E76F73",
  secondary: "#F2B84B",
  tertiary: "#5A9F68",
  info: "#5596C8",
  accent: "#B87AA4",

  border: "#3A3A3A",
} as const;

export const calendarColors = {
  personal: colors.primary,
  work: colors.info,
  church: colors.tertiary,
  birthdays: colors.accent,
  travel: colors.secondary,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 6,
  md: 12,
  lg: 18,
  full: 999,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  display: 40,
} as const;

export const theme = {
  colors,
  calendarColors,
  spacing,
  radius,
  fontSize,
} as const;

export const iconSize = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export const borderWidth = 2;

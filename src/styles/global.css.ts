import { createGlobalTheme, globalStyle } from "@vanilla-extract/css"

export const themeVars = createGlobalTheme(":root", {
  typography: {
    fontSize: {
      extraSmall: "0.75rem",
      small: "1rem",
      medium: "1.5rem",
      large: "2rem",
      extraLarge: "3.5rem",
    },
  },
  color: {
    text: {
      bold: "hsl(230, 17%, 14%)",
      normal: "hsl(230, 12%, 44%)",
      muted: "hsl(230, 22%, 74%)",
    },
  },
})

globalStyle("html", {
  fontFamily: "Inter, sans-serif",
  color: themeVars.color.text.normal,
})

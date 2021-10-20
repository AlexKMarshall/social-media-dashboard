import { createGlobalTheme, globalStyle, style } from "@vanilla-extract/css"

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
    green: "hsl(163, 72%, 41%)",
    red: "hsl(356, 69%, 56%)",
    brand: {
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      instagram:
        "linear-gradient(225deg, hsl(329, 70%, 58%) 0%, hsl(5, 77%, 71%) 50.91%, hsl(37, 97%, 70%) 100%)",
      youtube: "hsl(348, 97%, 39%)",
    },
    background: {
      main: "hsl(0, 0%, 100%)",
      card: "",
      decoration: "hsl(225, 100%, 98%)",
    },
  },
  animation: {
    transitionDuration: "250ms",
    transitionTimingFunction: "ease-in-out",
  },
})

globalStyle("html", {
  fontFamily: "Inter, sans-serif",
  color: themeVars.color.text.normal,
})

globalStyle("body", {
  position: "relative",
  backgroundColor: themeVars.color.background.main,
})

globalStyle("body::before", {
  content: "",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "25vh",
  backgroundColor: themeVars.color.background.decoration,
  zIndex: -1,
})

globalStyle("*, *::after, *::before", {
  transitionDuration: themeVars.animation.transitionDuration,
  transitionTimingFunction: themeVars.animation.transitionTimingFunction,
})

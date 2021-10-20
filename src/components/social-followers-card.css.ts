import { box, stack } from "src/styles/layout.css"
import { createVar, style } from "@vanilla-extract/css"

import { recipe } from "@vanilla-extract/recipes"
import { themeVars } from "src/styles/global.css"

const brandColor = createVar()

export const card = style([
  box,
  stack({ size: "small" }),
  {
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",

    ":before": {
      content: "",
      background: brandColor,
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "4px",
    },
  },
])

export const brandCard = recipe({
  base: card,

  variants: {
    brand: {
      facebook: {
        vars: {
          [brandColor]: themeVars.color.brand.facebook,
        },
      },
      twitter: {
        vars: {
          [brandColor]: themeVars.color.brand.twitter,
        },
      },
      instagram: {
        vars: {
          [brandColor]: themeVars.color.brand.instagram,
        },
      },
      youtube: {
        vars: {
          [brandColor]: themeVars.color.brand.youtube,
        },
      },
    },
  },
})

export const header = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "center",
})

export const socialHandle = style({
  textDecoration: "none",
  fontWeight: 700,
  color: "inherit",
  fontSize: themeVars.typography.fontSize.extraSmall,
})

export const followers = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
})

export const value = style({
  fontSize: themeVars.typography.fontSize.extraLarge,
  fontWeight: 700,
  color: themeVars.color.text.bold,
  lineHeight: "1",
})

export const metric = style({
  fontSize: themeVars.typography.fontSize.extraSmall,
  textTransform: "uppercase",
  letterSpacing: "5px",
})

export const footer = recipe({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: themeVars.typography.fontSize.extraSmall,
    fontWeight: 700,
  },

  variants: {
    direction: {
      up: {
        color: themeVars.color.green,
      },
      down: {
        color: themeVars.color.red,
      },
    },
  },
})

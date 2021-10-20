import { box } from "src/styles/layout.css"
import { recipe } from "@vanilla-extract/recipes"
import { style } from "@vanilla-extract/css"
import { themeVars } from "src/styles/global.css"

export const card = style([
  box,
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gap: "1.5rem",
    borderRadius: "5px",
  },
])

export const justifyEnd = style({
  justifySelf: "end",
})

export const alignEnd = style({
  alignSelf: "end",
})

export const metric = style({
  fontSize: themeVars.typography.fontSize.small,
  fontWeight: 700,
})

export const value = style([
  alignEnd,
  {
    fontSize: themeVars.typography.fontSize.large,
    fontWeight: 700,
    lineHeight: "1",
  },
])

export const change = recipe({
  base: [
    alignEnd,
    justifyEnd,
    {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.25rem",
      fontSize: themeVars.typography.fontSize.extraSmall,
      fontWeight: 700,
    },
  ],

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

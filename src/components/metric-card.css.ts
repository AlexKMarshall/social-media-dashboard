import { globalStyle, style } from "@vanilla-extract/css"

import { box } from "src/styles/layout.css"
import { recipe } from "@vanilla-extract/recipes"
import { themeVars } from "src/styles/global.css"

export const card = style([
  box,
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gap: "1.5rem",
    borderRadius: "5px",
    transitionProperty: "filter",

    selectors: {
      "&:hover, &:focus-within": {
        cursor: "pointer",
        filter: "brightness(90%)",
      },

      "&:focus-within": {
        outline: "2px solid",
      },
    },
  },
])

globalStyle(`${card} > *:nth-child(2), ${card} > *:nth-child(4)`, {
  justifySelf: "end",
})
globalStyle(`${card} > *:nth-child(3), ${card} > *:nth-child(4)`, {
  alignSelf: "end",
})

export const metric = style({
  fontSize: themeVars.typography.fontSize.small,
  fontWeight: 700,
})

globalStyle(`${metric} a`, {
  textDecoration: "none",
  color: "inherit",
})

globalStyle(`${metric} a:focus`, {
  outline: "none",
})

export const value = style({
  fontSize: themeVars.typography.fontSize.large,
  fontWeight: 700,
  lineHeight: "1",
})

export const change = recipe({
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

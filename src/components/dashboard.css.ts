import { center, stack } from "src/styles/layout.css"

import { style } from "@vanilla-extract/css"
import { themeVars } from "src/styles/global.css"

export const dashboard = style([center, stack({ size: "large" })])

export const header = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  fontWeight: 700,
})

export const h1 = style({
  fontSize: themeVars.typography.fontSize.large,
  color: themeVars.color.text.bold,
})
export const h2 = style({
  fontSize: themeVars.typography.fontSize.medium,
  color: themeVars.color.text.bold,
})

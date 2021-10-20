import { box } from "src/styles/layout.css"
import { style } from "@vanilla-extract/css"

export const card = style([
  box,
  {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
])

import { box, stack } from "src/styles/layout.css"

import { style } from "@vanilla-extract/css"

export const card = style([
  box,
  stack({ size: "small" }),
  {
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",

    ":before": {
      content: "",
      backgroundColor: "red",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "4px",
    },
  },
])

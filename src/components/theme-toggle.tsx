import { slider, themeToggle } from "./theme-toggle.css"
import { useEffect, useMemo, useState } from "react"

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue)

  return useMemo(
    () => ({ state, toggle: () => setState((state) => !state) }),
    [state]
  )
}

export function ThemeToggle(): JSX.Element {
  const { state: isPressed, toggle } = useToggle(true)

  useEffect(() => {
    const body = document.querySelector("body")
    body?.setAttribute("data-user-theme", isPressed ? "dark" : "light")
  }, [isPressed])

  return (
    <button
      aria-pressed={isPressed}
      onClick={toggle}
      type="button"
      className={themeToggle}
    >
      Dark Mode
      <span className={slider} aria-hidden />
    </button>
  )
}

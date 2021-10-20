import { useMemo, useState } from "react"

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue)

  return useMemo(
    () => ({ state, toggle: () => setState((state) => !state) }),
    [state]
  )
}

export function ThemeToggle(): JSX.Element {
  const { state: isPressed, toggle } = useToggle()

  return (
    <button aria-pressed={isPressed} onClick={toggle} type="button">
      Dark Mode
    </button>
  )
}

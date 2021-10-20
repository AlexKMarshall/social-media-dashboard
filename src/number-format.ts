type Options = {
  exact?: boolean
}

const million = 1_000_000
const thousand = 1000

export function formatNumber(
  num: number,
  { exact = true }: Options = {}
): string {
  if (exact) return num.toLocaleString()

  if (num >= 10 * million) {
    const numericPart = Math.floor(num / million)
    const suffix = "M"
    return `${formatNumber(numericPart, { exact: true })}${suffix}`
  }
  if (num >= 10 * thousand) {
    const numericPart = Math.floor(num / thousand)
    const suffix = "K"
    return `${formatNumber(numericPart, { exact: true })}${suffix}`
  }
  return num.toLocaleString()
}

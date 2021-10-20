import { Brand } from "src/types"
import { Logo } from "src/components/logo"
import { card } from "./metric-card.css"
import { screenReaderOnly } from "src/styles/accessibility.css"
import { useId } from "@react-aria/utils"

type Props = {
  metric: string
  brand: Brand
  value: number
  changePercent: number
}
export function MetricCard({
  metric,
  brand,
  value,
  changePercent,
}: Props): JSX.Element {
  const headingId = useId()
  const changeDirection = changePercent >= 0 ? "up" : "down"

  return (
    <article aria-labelledby={headingId} className={card}>
      <h3 id={headingId}>
        <span>{metric}</span>
        <span className={screenReaderOnly}> {brand}</span>
      </h3>
      <Logo brand={brand} aria-hidden />
      <p>{value}</p>
      <p>
        <span>{changeDirection}</span>
        <span>{Math.abs(changePercent)}%</span>
      </p>
    </article>
  )
}
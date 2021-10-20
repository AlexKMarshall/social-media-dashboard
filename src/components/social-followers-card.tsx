import { Brand } from "src/types"
import Link from "next/link"
import { Logo } from "src/components/logo"
import { card } from "./social-followers-card.css"
import { screenReaderOnly } from "src/styles/accessibility.css"
import { useId } from "@react-aria/utils"

type Props = {
  brand: Brand
  username: string
  value: number
  metric?: string
  change: number
  period?: string
}
export function SocialFollowersCard({
  brand,
  username,
  value,
  metric = "followers",
  change,
  period = "today",
}: Props): JSX.Element {
  const headingId = useId()

  const changeDirection = change >= 0 ? "up" : "down"
  return (
    <article aria-labelledby={headingId} className={card}>
      <header>
        <h2 id={headingId} className={screenReaderOnly}>
          {brand}
        </h2>
        <Logo brand={brand} aria-hidden />
        <p>
          <Link href="/">{username}</Link>
        </p>
      </header>
      <p>
        <span>{value}</span> <span>{metric}</span>
      </p>
      <footer>
        <span>{changeDirection}</span> {Math.abs(change)} {period}
      </footer>
    </article>
  )
}

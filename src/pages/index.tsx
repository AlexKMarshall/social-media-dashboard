import { followerData, metricData } from "src/data"

import { Brand } from "src/types"
import Head from "next/head"
import Link from "next/link"
import { Logo } from "src/components/logo"
import type { NextPage } from "next"
import { ThemeToggle } from "src/components/theme-toggle"
import { screenReaderOnly } from "src/styles/accessibility.css"
import { useId } from "@react-aria/utils"

const Home: NextPage = () => {
  const totalFollowers = followerData
    .map((brand) => brand.value)
    .reduce((acc, cur) => acc + cur)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: {totalFollowers}</p>
          <ThemeToggle />
        </header>
        {followerData.map((f) => (
          <SocialFollowersCard
            key={f.brand}
            brand={f.brand}
            username={f.username}
            value={f.value}
            change={f.change}
            metric={f.metric}
            period={f.period}
          />
        ))}
        <h2>Overview - Today</h2>
        {metricData.map((m) => (
          <MetricCard
            key={`${m.brand}-${m.metric}`}
            metric={m.metric}
            brand={m.brand}
            value={m.value}
            changePercent={m.changePercent}
          />
        ))}
      </main>
    </>
  )
}

export default Home

type SocialFollowersCardProps = {
  brand: Brand
  username: string
  value: number
  metric?: string
  change: number
  period?: string
}
function SocialFollowersCard({
  brand,
  username,
  value,
  metric = "followers",
  change,
  period = "today",
}: SocialFollowersCardProps): JSX.Element {
  const headingId = useId()

  const changeDirection = change >= 0 ? "up" : "down"
  return (
    <article aria-labelledby={headingId}>
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

type MetricCardProps = {
  metric: string
  brand: Brand
  value: number
  changePercent: number
}
function MetricCard({
  metric,
  brand,
  value,
  changePercent,
}: MetricCardProps): JSX.Element {
  const headingId = useId()
  const changeDirection = changePercent >= 0 ? "up" : "down"

  return (
    <article aria-labelledby={headingId}>
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

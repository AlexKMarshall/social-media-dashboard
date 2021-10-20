import { followerData, metricData } from "src/data"
import { fullWidth, grid } from "src/styles/layout.css"

import { MetricCard } from "./metric-card"
import { SocialFollowersCard } from "./social-followers-card"
import { ThemeToggle } from "./theme-toggle"
import { dashboard } from "./dashboard.css"

export function Dashboard() {
  const totalFollowers = followerData
    .map((brand) => brand.value)
    .reduce((acc, cur) => acc + cur)

  return (
    <main className={dashboard}>
      <header className={fullWidth}>
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
      <h2 className={fullWidth}>Overview - Today</h2>
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
  )
}

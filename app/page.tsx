import LandingPage from '@/components/landingpage'
import About from '@/components/about'
import Team from '@/components/team'
import Join from '@/components/join'

export default function Home() {
  return (
    <main className="h-screen">
      <LandingPage />
      <About />
      <Team />
      <Join />
    </main>
  )
}

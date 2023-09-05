import LandingPage from '@/components/landingpage'
import About from '@/components/about'
import Events from '@/components/events'
import Team from '@/components/team'
import Join from '@/components/join'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="h-screen">
      <LandingPage />
      <About />
      <Events />
      <Team />
      <Join />
      <Footer />
    </main>
  )
}

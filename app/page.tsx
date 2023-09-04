import LandingPage from '@/components/landingpage'
import About from '@/components/about'
import Team from '@/components/team'
import Join from '@/components/join'
import Footer from '@/components/footer'
import Header from './header'

export default function Home() {
  return (
    <main className="h-screen">
      <LandingPage />
      <About />
      <Team />
      <Join />
      <Footer />
    </main>
  )
}

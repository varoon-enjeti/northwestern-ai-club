import Home from '@/components/home'
import About from '@/components/about'
import Events from '@/components/events'
import Team from '@/components/team'
import Join from '@/components/join'
import Footer from '@/components/footer'

export default function Site() {
  return (
    <main className="h-screen">
      <Home />
      <About />
      <Events />
      <Team />
      <Join />
      <Footer />
    </main>
  )
}

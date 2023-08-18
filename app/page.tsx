import Header from '@/components/header'
import LandingPage from '@/components/landing-page'
import About from '@/components/about'

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <LandingPage />
      <About />
    </main>
  )
}

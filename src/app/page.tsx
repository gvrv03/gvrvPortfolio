import About from "@/components/Home/About"
import Experience from "@/components/Home/Experience"
import LandingPage from "@/components/Home/LandingPage"
import Projects from "@/components/Home/Projects"
import Navbar from "@/components/Utility/Navbar"


export default function Home() {
  return (
    <main >
      {/* <ParticleBackground/> */}
      <Navbar/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Experience/>
    </main>
  )
}

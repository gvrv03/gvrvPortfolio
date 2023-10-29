import Skills from "@/components/Home/Skills"
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
      <Skills/>
      <Projects/>
      <Experience/>
    </main>
  )
}

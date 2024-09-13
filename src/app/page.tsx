import Skills from "@/components/Home/Skills"
import Experience from "@/components/Home/Experience"
import LandingPage from "@/components/Home/LandingPage"
import Projects from "@/components/Home/Projects"
import ContactUs from "@/components/Home/ContactUs"


export default function Home() {
  return (
    <main >
      {/* <ParticleBackground/> */}
      <LandingPage />
      <Skills />
      <Projects />
      <Experience />
      <ContactUs />
    </main>
  )
}

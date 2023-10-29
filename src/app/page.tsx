"use client"
import About from "@/components/Home/About"
import Experience from "@/components/Home/Experience"
import LandingPage from "@/components/Home/LandingPage"
import Projects from "@/components/Home/Projects"
import Navbar from "@/components/Utility/Navbar"
import ParticleBackground from "@/components/Utility/ParticleBackground"
import PreLoader from "@/components/Utility/PreLoader"
import { useState } from "react"


export default function Home() {
  const [first, setfirst] = useState(" ")
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

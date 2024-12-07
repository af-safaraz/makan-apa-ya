// import { useState } from 'react'
import Hero from './sections/Hero'
import Wheel from './sections/Wheel'
import Footer from './sections/Footer'

function App() {

  return (
    <main>
      <section className="min-h-screen sm:h-screen sm:min-h-[600px]
      xl:m-auto xl:max-w-[1400px] ">
        <Hero />
      </section>
      <section id="wheel" className="min-h-screen mt-20 w-screen sm:flex sm:justify-center xl:m-auto xl:max-w-[1400px]">
        <Wheel />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}

export default App

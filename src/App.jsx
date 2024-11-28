// import { useState } from 'react'
import Hero from './sections/Hero'
import Wheel from './sections/Wheel'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="relative h-screen">
      <section className="h-screen 2xl:m-auto 2xl:max-w-[1400px]">
        <Hero />
      </section>
      <section id="wheel" className="h-screen mt-48">
        <Wheel />
      </section>
    </main>
  )
}

export default App

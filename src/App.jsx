// import { useState } from 'react'
import Hero from './sections/Hero'
import Wheel from './sections/Wheel'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <section className="min-h-screen 
      2xl:m-auto 2xl:max-w-[1400px] 
      sm:h-full sm:min-h-[600px]">
        <Hero />
      </section>
      <section id="wheel" className="min-h-screen mt-20">
        <Wheel />
      </section>
    </main>
  )
}

export default App

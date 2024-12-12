// import { useState } from 'react'
import Hero from './sections/Hero'
import Wheel from './sections/Wheel'
import Footer from './sections/Footer'
// import Message from './components/Message'
// import WheelContainer from './components/WheelContainer'
// import { useState } from 'react'

function App() {
  // const [countSpin, setCountSpin] = useState(0)
  // const [isMsgVisible, setIsMsgVisible] = useState(false)

  return (
    <main>
      <section className="min-h-screen sm:h-screen sm:min-h-[700px] xl:m-auto xl:max-w-[1400px] ">
        <Hero />
        {/* <Hero>
          {isMsgVisible && <Message />}
        </Hero> */}
      </section>
      <div className="min-h-screen h-screen">
        <section id="wheel" className="mt-20 w-screen md:flex md:justify-center xl:m-auto xl:max-w-[1400px]">
          <Wheel />
          {/* <Wheel>
            <WheelContainer countSpin={countSpin} onSpinRest={setCountSpin} />
          </Wheel> */}
        </section>
        <footer className="flex justify-center">
          <Footer />
        </footer>
      </div>
    </main>
  )
}

export default App

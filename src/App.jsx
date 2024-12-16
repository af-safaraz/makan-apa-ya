import Hero from './sections/Hero'
import Wheel from './sections/Wheel'
import Footer from './sections/Footer'
import Message from './components/Message'
import WheelContainer from './components/WheelContainer'
import FoodList from './components/FoodList'
import FoodRecommendations from './components/FoodRecommendations'
import { useState, useEffect } from 'react'

function App() {
  const [countSpin, setCountSpin] = useState(0)
  const [isMsgVisible, setIsMsgVisible] = useState(false)
  const [foodList, setFoodList] = useState('Nasi Goreng\nSoto\nBakso\nSate')

  const handleFoodListChange = (e) => {
    setFoodList(e.target.value)
  }

  const handleFoodRecClick = (foodName) => {
    if (!foodList) {
      setFoodList(foodName)
    } else {
      setFoodList((prev) => prev + "\n" + foodName)
    }
  }

  const handleDeleteClick = () => {
    setFoodList("");
  }

  useEffect(() => {
    if (countSpin === 3) {
      setIsMsgVisible(true)
      setTimeout(() => {
        setIsMsgVisible(false)
      }, 8000)
    }
  }, [countSpin])

  return (
    <main>
      <section className="min-h-screen sm:h-screen sm:min-h-[700px] xl:m-auto xl:max-w-[1400px] ">
        <Hero>
          {isMsgVisible && <Message />}
        </Hero>
      </section>
      <section className="min-h-screen flex flex-col justify-between items-center">
        <section id="wheel" className="mt-8 w-screen md:flex md:justify-center xl:max-w-[1400px]">
          <Wheel
            wheelContainer={<WheelContainer foodList={foodList} setCountSpin={setCountSpin} />}
            foodList={<FoodList foodList={foodList} onFoodListChange={handleFoodListChange} onDeleteClick={handleDeleteClick} />}
            foodRec={<FoodRecommendations onFoodRecClick={handleFoodRecClick} />} />
        </section>
        <footer className="flex justify-center">
          <Footer />
        </footer>
      </section>
    </main>
  )
}

export default App

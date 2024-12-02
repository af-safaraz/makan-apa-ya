
import WheelContainer from '../components/WheelContainer'
import FoodList from '../components/FoodList'
import FoodRecommendations from '../components/FoodRecommendations'
import { useState } from 'react'

const Wheel = () => {
    const [foodList, setFoodList] = useState("Nasi Goreng\nSoto\nBakso\nSate");

    return (
        <div className="flex flex-col sm:flex-row w-full lg:w-[90%]">
            <div className="h-[50vh] flex justify-center items-center p-5 sm:w-[50%] sm:h-screen">
                <WheelContainer />
            </div>
            <div className="min-h-[50vh] px-5 flex flex-col items-center sm:w-[50%] sm:items-start sm:p-5">
                <FoodList foodList={foodList} />
                <FoodRecommendations />
            </div>
        </div>
    )
}

export default Wheel
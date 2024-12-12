
import WheelContainer from '../components/WheelContainer'
import FoodList from '../components/FoodList'
import FoodRecommendations from '../components/FoodRecommendations'
import { useState } from 'react'

const Wheel = () => {
    const [foodList, setFoodList] = useState('Nasi Goreng\nSoto\nBakso\nSate');
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

    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full md:flex-row md:items-start  lg:w-[95%]">
            <div className="p-5 h-full w-full max-w-[500px] md:max-w-[550px] flex justify-center items-start md:w-[50%] md:h-screen">
                <WheelContainer foodList={foodList} />
            </div>
            <div className="px-5 flex flex-col items-center md:w-[50%] md:items-start md:p-5">
                <FoodList foodList={foodList} onFoodListChange={handleFoodListChange} onDeleteClick={handleDeleteClick} />
                <FoodRecommendations onFoodRecClick={handleFoodRecClick} />
            </div>
        </div >
    )
}

export default Wheel
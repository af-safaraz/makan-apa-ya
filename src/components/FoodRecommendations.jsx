import Button from '../components/Button';
import { foods, foodCategories } from '../constants/index.js';
import { useState } from 'react';


const FoodRecommendations = ({ onFoodRecClick }) => {
    const [selectedCategory, setSelectedCategory] = useState("Aneka Nasi");
    const handleCategoriesChange = (e) => {
        setSelectedCategory(e.target.value);
    }
    return (
        <div className="flex flex-col items-center sm:items-start w-full">
            <h6 className="mt-6 font-poppins font-medium text-gray-700 sm:text-lg">Rekomendasi:</h6>
            <select name="categories" id="categories" value={selectedCategory} onChange={handleCategoriesChange} className="mt-3 mb-5 py-1 px-3 font-poppins text-sm text-gray-700 border border-tertiary-darker rounded-lg bg-tertiary-dark sm:text-base" >
                {foodCategories.map((fc, index) => (
                    <option key={index} value={fc.name}>{fc.name}</option>
                ))}
            </select>
            <div className="flex flex-wrap justify-center sm:justify-start">
                {foods.filter(food => food.category.includes(selectedCategory)).map((food, index) => (
                    <Button key={index} label={food.name} onClick={() => onFoodRecClick(food.name)} />
                ))}
            </div>
        </div>
    )
}

export default FoodRecommendations
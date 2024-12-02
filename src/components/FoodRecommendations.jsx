import Button from '../components/Button'

const FoodRecommendations = () => {
    return (
        <div className="flex flex-col items-center sm:items-start w-full">
            <h6 className="mt-6 font-poppins font-medium text-gray-700 sm:text-lg">Rekomendasi:</h6>
            <select name="categories" id="categories" className="mt-3 mb-5 py-1 px-3 font-poppins text-sm text-gray-700 border border-tertiary-darker rounded-lg bg-tertiary-dark sm:text-base" >
                <option value="indonesian">Makanan Indonesia</option>
                <option value="korean">Makanan Korea</option>
                <option value="japanese">Makanan Jepang</option>
            </select>
            <Button label="+ Nasi Goreng" />
        </div>
    )
}

export default FoodRecommendations
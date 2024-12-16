const FoodList = ({ foodList, onFoodListChange, onDeleteClick }) => {
    return (
        <div className="w-full flex flex-col items-center md:items-start">
            <h6 className="font-poppins font-medium text-gray-700 sm:text-lg">Daftar Makanan:</h6>
            <form className="relative h-full w-full flex justify-center">
                <textarea
                    id="foodList"
                    name="foodList"
                    placeholder="Masukkan nama makanan pilihanmu seperti:&#10;Nasi Goreng&#10;Bakso&#10;Sate&#10;Soto"
                    className="mt-3 mb-5 p-2 pr-12 w-[90%] h-40 md:h-60 font-poppins text-sm text-gray-700 resize-none border border-tertiary-darker rounded-lg bg-tertiary-dark md:w-full sm:text-base"
                    value={foodList}
                    onChange={onFoodListChange}
                >
                </textarea>
                <button type="button" onClick={onDeleteClick} className="absolute top-5 right-6 md:right-3 text-lg w-8 h-8 rounded-lg hover:bg-tertiary-darker active:bg-tertiary-700">&#x2715;</button>
            </form>
        </div>
    )
}

export default FoodList
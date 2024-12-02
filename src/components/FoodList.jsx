import Button from '../components/Button'

const FoodList = ({ foodList, }) => {
    return (
        <div className="w-full flex flex-col items-center sm:items-start">
            <h6 className="font-poppins font-medium text-gray-700 sm:text-lg">Daftar Makanan:</h6>
            <textarea id="foodList" name="foodList" placeholder="Masukkan nama-nama makanan yang dipisahkan dengan baris baru seperti:&#10;Nasi Goreng&#10;Bakso&#10;Sate&#10;Soto" className="mt-3 mb-5 p-2 w-[90%] h-32 sm:h-60 font-poppins text-sm text-gray-700 resize-none border border-tertiary-darker rounded-lg bg-tertiary-dark sm:w-full sm:text-base" defaultValue={foodList}>
            </textarea>
            <Button label="Buat Roda" />
        </div>
    )
}

export default FoodList
import Button from '../components/Button'

const Wheel = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 flex justify-center items-center">
                <div className="wheel-container w-[90%] h-[90%] bg-primary"></div>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <h6 className="font-poppins font-medium text-gray-700">Daftar Makanan:</h6>
                <textarea id="foodList" name="foodList" rows="6" placeholder="Masukkan nama-nama makanan yang dipisahkan dengan baris baru seperti:&#10;Nasi Goreng&#10;Bakso&#10;Sate&#10;Soto" className="my-3 p-2 w-[80%] font-poppins text-sm text-gray-700 resize-none border border-tertiary-darker rounded-lg bg-tertiary-dark" defaultValue="Nasi Goreng&#10;Soto&#10;Bakso&#10;Sate">
                </textarea>
                <h6 className="mt-3 font-poppins font-medium text-gray-700">Rekomendasi:</h6>
                <select name="categories" id="categories" className="my-3 py-1 px-3 font-poppins text-sm text-gray-700 border border-tertiary-darker rounded-lg bg-tertiary-dark" >
                    <option value="indonesian">Makanan Indonesia</option>
                    <option value="korean">Makanan Korea</option>
                    <option value="japanese">Makanan Jepang</option>
                </select>
                <Button label="Nasi Goreng" />
            </div>
        </div>
    )
}

export default Wheel
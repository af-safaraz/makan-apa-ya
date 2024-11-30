import Button from '../components/Button'

const Wheel = () => {
    return (
        <div className="flex flex-col sm:flex-row w-full lg:w-[90%]">
            <div className="h-[50vh] flex justify-center items-center p-5 sm:w-[50%] sm:h-screen">
                <div className="wheel-container w-full h-full bg-primary"></div>
            </div>
            <div className="min-h-[50vh] flex flex-col items-center sm:w-[50%] sm:items-start sm:p-5">
                <h6 className="font-poppins font-medium text-gray-700 sm:text-lg">Daftar Makanan:</h6>
                <textarea id="foodList" name="foodList" rows="10" placeholder="Masukkan nama-nama makanan yang dipisahkan dengan baris baru seperti:&#10;Nasi Goreng&#10;Bakso&#10;Sate&#10;Soto" className="my-3 p-2 w-[90%] font-poppins text-sm text-gray-700 resize-none border border-tertiary-darker rounded-lg bg-tertiary-dark sm:w-full sm:text-base" defaultValue="Nasi Goreng&#10;Soto&#10;Bakso&#10;Sate">
                </textarea>
                <Button label="Buat Roda" />
                <h6 className="mt-6 font-poppins font-medium text-gray-700 sm:text-lg">Rekomendasi:</h6>
                <select name="categories" id="categories" className="my-3 py-1 px-3 font-poppins text-sm text-gray-700 border border-tertiary-darker rounded-lg bg-tertiary-dark sm:text-base" >
                    <option value="indonesian">Makanan Indonesia</option>
                    <option value="korean">Makanan Korea</option>
                    <option value="japanese">Makanan Jepang</option>
                </select>
                <Button label="+ Nasi Goreng" />
            </div>
        </div>
    )
}

export default Wheel
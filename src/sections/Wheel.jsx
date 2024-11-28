import Button from '../components/Button'

const Wheel = () => {
    return (
        <div className="flex flex-col">
            <div className="h-[50vh] flex justify-center items-center p-5">
                <div className="wheel-container w-full h-full bg-primary"></div>
            </div>
            <div className="min-h-[50vh] flex flex-col items-center">
                <h6 className="font-poppins font-medium text-gray-700">Daftar Makanan:</h6>
                <textarea id="foodList" name="foodList" rows="6" placeholder="Masukkan nama-nama makanan yang dipisahkan dengan baris baru seperti:&#10;Nasi Goreng&#10;Bakso&#10;Sate&#10;Soto" className="my-3 p-2 w-[80%] font-poppins text-sm text-gray-700 resize-none border border-tertiary-darker rounded-lg bg-tertiary-dark" defaultValue="Nasi Goreng&#10;Soto&#10;Bakso&#10;Sate">
                </textarea>
                <Button label="Buat Roda" />
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
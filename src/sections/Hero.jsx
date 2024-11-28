import Button from '../components/Button'
import foodWheel from '../assets/images/WheelOfFood.svg'

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center 
        sm:flex-row sm:h-full">
            <div className="pb-5 h-[60vh] flex flex-col justify-end items-center text-center 
            sm:pl-8 sm:pr-3 sm:pb-0 sm:justify-center sm:items-start sm:w-[55%] sm:h-full sm:min-h-screen sm:text-left">
                <h1 className="font-dela-gothic text-6xl text-primary text-black-border text-black-shadow-sm leading-[1.15] sm:text-7xl sm:text-black-shadow-lg">
                    Makan <span className="xl:inline block">Apa Ya?</span>
                </h1>
                <p className="my-7 px-3 font-poppins text-sm text-gray-700 sm:text-lg">
                    Bingung mau makan apa?
                    <span className="lg:inline block"> Biarkan kami bantu pilih!</span>
                    <span className="block">Masukkan pilihan makan favoritmu atau pilih dari daftar kami, lalu putar roda untuk mendapatkan jawaban. Mudah, cepat, dan tanpa drama!</span>
                </p>
                <Button label="Mulai Sekarang" href="#wheel" />
            </div>
            <div className="min-h-[40vh] flex flex-col w-full pt-5 justify-start items-center sm:pt-0 sm:w-[45%] sm:h-full sm:items-start sm:justify-center overflow-hidden">
                <img src={foodWheel} alt="Wheel of Food" className="w-[120%] h-[120]% max-w-none max-h-none sm:w-[170%] lg:w-[95%] object-cover" />
            </div>

        </div >
    )
}

export default Hero
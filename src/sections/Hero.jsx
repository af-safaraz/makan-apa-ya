import Button from '../components/Button'
import SocialMedia from '../components/SocialMedia'
import ramen from '../assets/images/Ramen.svg'
import burger from '../assets/images/Burger.svg'
import iceCream from '../assets/images/iceCream.svg'
import pudding from '../assets/images/Pudding.svg'
import Star from '../assets/images/Star.svg?react'

const Hero = ({ children }) => {
    return (
        <div className="min-h-screen h-full flex flex-col justify-start items-center ">
            <div className="w-full h-10 mt-3 flex justify-center items-end">
                <SocialMedia />
            </div>
            <div className="min-h-[600px] flex-1 h-full w-full max-w-6xl flex flex-col justify-center items-center sm:flex-row">
                <div className="relative max-h-[650px] sm:max-h-[600px] h-full w-full flex-1 flex flex-col justify-center items-center sm:flex-row ">
                    <div className="px-8 flex flex-col items-center text-center sm:pb-0 sm:px-8 sm:max-w-5xl sm:justify-center sm:items-center sm:h-full z-50">
                        <h1 className="font-dela-gothic text-[3rem] 2xs:text-[3.5rem] text-primary text-black-border text-black-shadow-sm leading-[1.15] sm:text-7xl sm:text-black-shadow-lg">
                            Makan <span className="md:inline block">Apa Ya?</span>
                        </h1>
                        <p className="my-7 font-poppins text-sm text-gray-700 sm:text-lg">
                            Bingung mau makan apa? <br className="hidden 3xs:inline md:hidden" />
                            Website ini mungkin bisa bantu kamu. <br className="hidden 3xs:inline" />
                            Masukkan pilihan makanan favoritmu atau pilih dari daftar rekomendasi, lalu putar roda untuk mendapatkan pilihan. <br className="hidden 3xs:inline md:hidden" />
                            Mudah, cepat, dan tanpa drama!
                        </p>
                        <Button label="Mulai Sekarang" href="#wheel" />
                    </div>
                    <div className="absolute w-full h-full sm:h-[95%]">
                        <img src={ramen} alt="Cute Ramen" className="absolute max-w-[90px] w-[18%] top-[2%] left-[10%] sm:max-w-none sm:w-[13%] sm:top-[2%] sm:left-[8%] lg:left-8 " />
                        {children}
                        <div className="absolute w-[25%] h-[8%] top-[14%] left-[10%] sm:w-[23%] sm:h-[17%] sm:left-[4%] sm:top-[5%] lg:w-[19%] lg:h-[35%]">
                            <Star className="absolute w-6 h-6 lg:w-8 lg:h-8 bottom-0 left-0" />
                            <Star className="absolute w-4 h-4 sm:h-4 lg:w-6 lg:h-6 top-0 right-0" fill="#F9DDB7" />
                        </div>
                        <img src={pudding} alt="Cute Pudding" className="absolute max-w-[90px] w-[18%] top-[5%] right-[13%] sm:max-w-none sm:w-[13%] sm:top-0 sm:right-[6%] md:right-[8%] lg:right-7" />
                        <div className="absolute w-[28%] h-[8%] top-[17%] right-[10%] max- sm:w-[23%] sm:h-[17%] sm:right-[3%] sm:top-[8%] lg:w-[19%] lg:h-[35%] lg:top-[8%]">
                            <Star className="absolute w-4 h-4 sm:h-4 lg:w-6 lg:h-6 top-0 left-0" />
                            <Star className="absolute w-6 h-6 lg:w-8 lg:h-8 bottom-0 right-0" fill="#F9DDB7" />
                        </div>
                        <img src={burger} alt="Cute Burger" className="absolute max-w-[90px] w-[18%] bottom-[4%] left-[11%] sm:max-w-none sm:w-[13%] sm:bottom-[6%] sm:left-[19%] lg:left-[16%]" />
                        <div className="absolute w-[30%] h-[10%] bottom-[15%] left-[12%] sm:w-[23%] sm:h-[20%] sm:left-[15%] sm:bottom-[5%] lg:w-[22%] lg:h-[26%] lg:left-[12%] lg:bottom-[5%]">
                            <Star className="absolute w-6 h-6 lg:w-8 lg:h-8 top-0 left-0" fill="#F9DDB7" />
                            <Star className="absolute w-4 h-4 sm:h-4 lg:w-6 lg:h-6 bottom-0 right-0" />
                        </div>
                        <img src={iceCream} alt="Cute Ice Cream" className="absolute max-w-[90px] w-[18%] bottom-[0%] right-[13%] sm:max-w-none  sm:w-[12%] sm:bottom-[6%] sm:right-[18%] md:right-[20%] lg:right-[16%]" />
                        <div className="absolute w-[30%] h-[9%] bottom-[14%] right-[12%] sm:w-[24%] sm:h-[16%] sm:right-[14%] sm:bottom-[10%] lg:w-[23%] lg:h-[26%] lg:right-[11%] lg:bottom-[8%]">
                            <Star className="absolute w-6 h-6 lg:w-8 lg:h-8 top-0 right-0" />
                            <Star className="absolute w-4 h-4 lg:w-6 lg:h-6 bottom-0 left-0" fill="#F9DDB7" />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Hero
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
                    {/* Version 3 */}
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

                {/* Version 1 */}
                {/* <img src={ramen} alt="Cute Ramen" className="absolute top-0 left-9 w-[28%] md:w-[14%] md lg:top-[110px] lg:left-[35px] lg:w-[13%]" />
                <img src={pudding} alt="Cute Pudding" className="absolute top-8 right-9 w-[28%] md:w-[14%] lg:top-[100px] lg:right-[30px] lg:w-[13%]" />
                <Star className="absolute top-44 left-10 sm:w-[31px] sm:h-[31px] lg:top-[280px] lg:left-[45px]" />
                <Star className="absolute top-32 left-[122px] sm:w-[22px] sm:h-[22px] lg:top-[140px] lg:left-[240px]" fill="#F9DDB7" />
                <Star className="absolute top-36 right-[155px] sm:w-[21px] sm:h-[21px] lg:top-[150px] lg:right-[240px]" />
                <Star className="absolute top-[190px] right-9 sm:w-[29px] sm:h-[29px] lg:top-[290px] lg:right-[35px]" fill="#F9DDB7" /> */}
                {/* Version 2 */}
                {/* <div className="absolute w-full h-full sm:h-[80%] lg:h-[75%] lg:translate-y-4 border border-primary">
                    <img src={ramen} alt="Cute Ramen" className="absolute w-[25%] top-[7%] sm:w-[13%] sm:top-3 sm:left-[8%] lg:left-8 " />
                    <Star className="absolute sm:top-24 sm:left-[4%] w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] lg:top-44 lg:left-11 lg:w-[31px] lg:h-[31px]" />
                    <Star className="absolute sm:top-8 sm:left-[25%] w-[20px] h-[20px] lg:top-9 lg:left-60 sm:w-[16px] sm:h-[16px] lg:w-[22px] lg:h-[22px]" fill="#F9DDB7" />
                    <img src={pudding} alt="Cute Pudding" className="absolute w-[13%] top-0 sm:right-[8%] lg:right-7" />
                    <Star className="absolute sm:top-11 sm:right-[24%] w-[20px] h-[20px] lg:top-12 lg:right-56 sm:w-[17px] sm:h-[17px] lg:w-[21px] lg:h-[21px]" />
                    <Star className="absolute sm:top-28 sm:right-[3%] w-[20px] h-[20px] lg:top-48 lg:right-9 sm:w-[24px] sm:h-[24px] lg:w-[29px] lg:h-[29px]" fill="#F9DDB7" />
                    <img src={burger} alt="Cute Burger" className="absolute w-[13%] bottom-2 sm:left-[20%] lg:left-44" />
                    <Star className="absolute sm:bottom-28 sm:left-[15%] w-[20px] h-[20px] lg:bottom-40 lg:left-28 sm:w-[24px] sm:h-[24px] lg:w-[29px] lg:h-[29px]" fill="#F9DDB7" />
                    <Star className="absolute sm:bottom-8 sm:left-[38%] w-[20px] h-[20px] lg:bottom-7 lg:left-96 sm:w-[17px] sm:h-[17px] lg:w-[21px] lg:h-[21px]" />
                    <img src={iceCream} alt="Cute Ice Cream" className="absolute w-[12%] bottom-2 sm:right-[20%] lg:right-40" />
                    <Star className="absolute sm:bottom-14 sm:right-[38%] w-[20px] h-[20px] lg:bottom-12 lg:right-96 sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]" fill="#F9DDB7" />
                    <Star className="absolute sm:bottom-24 sm:right-[13%] w-[20px] h-[20px] lg:bottom-36 lg:right-20 sm:w-[23px] sm:h-[23px] lg:w-[31px] lg:h-[31px]" />
                    </div> */}


                {/* Version 1 */}
                {/* <Star width="25px" height="15px" className="absolute bottom-56 left-10 sm:w-[29px] sm:h-[29px] sm:bottom-[225px] sm:left-[115px]" fill="#F9DDB7" />
                <Star width="25px" height="20px" className="absolute bottom-44 left-28 sm:w-[21px] sm:h-[21px] sm:bottom-[100px] sm:left-[380px]" />
                <Star width="25px" height="23px" className="absolute bottom-[155px] right-32 sm:w-[20px] sm:h-[20px] sm:bottom-[120px] sm:right-[380px]" fill="#F9DDB7" />
                <Star width="25px" height="24px" className="absolute bottom-52 right-9 sm:w-[31px] sm:h-[31px] sm:bottom-[215px] sm:right-[90px]" />
                <img src={burger} alt="Cute Burger" className="absolute bottom-12 left-9 w-[28%] sm:bottom-[80px] sm:left-[170px] md:w-[14%] lg:w-[13%] " />
                <img src={iceCream} alt="Cute Ice Cream" className="absolute bottom-0 right-9 w-[28%] sm:bottom-[80px] sm:right-[160px] md:w-[14%] lg:w-[12%]" /> */}

                {/* <div className="min-h-[40vh] pt-5 w-full flex flex-col justify-start items-center 
            sm:pt-0 sm:w-[45%] sm:h-full sm:items-start sm:justify-center overflow-hidden">
            <img src={foodWheel} alt="Wheel of Food" className="w-[120%] h-[120]% max-w-none max-h-none sm:w-[170%] lg:w-[95%] object-cover" />
            </div> */}

            </div >
        </div >
    )
}

export default Hero
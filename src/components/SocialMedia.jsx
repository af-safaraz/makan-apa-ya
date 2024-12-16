import instagram from '../assets/images/Instagram.svg'
import gitHub from '../assets/images/Github.svg'
import mail from '../assets/images/Email.svg'

const SocialMedia = () => {
    return (
        <div className="mt-3 w-40 sm:w-48 h-9 sm:h-10 bg-[#2c2c2c] rounded-full overflow-hidden">
            <div className="flex flex-col justify-start items-center h-full animate-rolling-text-mobile sm:animate-rolling-text hover:animate-none">
                <div className="flex justify-center items-center w-full gap-8 min-h-9 sm:min-h-10">
                    <a href="https://www.instagram.com/safaraz_/" target="_blank"><img src={instagram} alt="Instagram Logo" className="w-5 sm:w-6" /></a>
                    <a href="mailto:afsafarazd@gmail.com" target="_blank"><img src={mail} alt="Mail Logo" className="w-6 sm:w-7" /></a>
                    <a href="https://github.com/af-safaraz" target="_blank"><img src={gitHub} alt="GitHub Logo" className="w-5 sm:w-6" /></a>
                </div>
                <div className="min-h-9 sm:min-h-10 w-full flex justify-center items-center">
                    <p className="font-poppins text-white text-center text-xs sm:text-sm">Contact The Creator</p>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
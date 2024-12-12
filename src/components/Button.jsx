const Button = ({ label, href, onClick }) => {
    return (
        <a href={href} onClick={onClick} className="px-4 py-2 mx-1 mb-3 font-poppins font-medium text-sm text-gray-700 bg-secondary hover:bg-secondary-dark border-2 border-gray-700 rounded-full sm:text-base sm:px-5 sm:py-2 sm:mr-2 cursor-pointer">
            {label}
        </a >
    )
}

export default Button
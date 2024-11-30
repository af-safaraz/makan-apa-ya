const Button = ({ label, href }) => {
    return (
        <a href={href} className="px-4 py-2 font-poppins font-medium text-sm text-gray-700 bg-secondary hover:bg-secondary-dark border-2 border-gray-700 rounded-full sm:text-base sm:px-5 sm:py-3">
            {label}
        </a>
    )
}

export default Button
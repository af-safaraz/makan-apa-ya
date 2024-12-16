const Wheel = ({ wheelContainer, foodList, foodRec }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full md:flex-row md:items-start  lg:w-[95%]">
            <div className="p-5 h-full w-full max-w-[500px] md:max-w-[550px] flex justify-center items-start md:w-[50%] md:h-full">
                {wheelContainer}
            </div>
            <div className="px-5 w-full flex flex-col items-center md:w-[50%] md:items-start md:p-5">
                {foodList}
                {foodRec}
            </div>
        </div >
    )
}

export default Wheel
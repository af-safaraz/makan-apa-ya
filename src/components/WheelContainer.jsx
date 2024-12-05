import { Wheel } from '../../node_modules/spin-wheel/dist/spin-wheel-esm.js'
import { useState, useRef, useEffect } from 'react';
import WheelPointer from '../assets/images/WheelPointer.svg'

const WheelContainer = ({ foodList }) => {
    const container = useRef(null);
    const effectRun = useRef(false);
    const [wheel, setWheel] = useState(null);

    const getWheelItems = () => {
        const foodItems = foodList.split("\n").filter(food => food !== "");
        const colorPreset = foodItems.length % 4 === 1 ? ["#FF8D47", "#F0ECCF", "#ffc96f", "#A3BB98", "#F0ECCF"] : ["#FF8D47", "#F0ECCF", "#ffc96f", "#A3BB98"];
        const wheelItems = foodItems.map((food, index) => {
            return {
                label: food,
                backgroundColor: colorPreset[index % colorPreset.length]
            };
        });
        return wheelItems;
    }

    const handleSpinClick = () => {
        if (wheel && foodList) {
            wheel.spin(Math.floor(Math.random() * (1300 - 900 + 1)) + 900);
            // wheel.spin(900);
            wheel.onCurrentIndexChange = () => {
                const spinSound = new Audio("/src/assets/sounds/SpinSound.mp3");
                spinSound.play();
            };
            wheel.onRest = () => {
                const dingSound = new Audio("/src/assets/sounds/DingSound.mp3");
                dingSound.play();
            }
        }
    }

    // Initialize Wheel
    useEffect(() => {
        const wheelPointerImg = new Image()
        wheelPointerImg.src = WheelPointer;
        const props = {
            borderWidth: 5,
            borderColor: '#5c4f3e',
            lineWidth: 3,
            lineColor: '#5c4f3e',
            itemLabelFont: 'Poppins',
            itemLabelFontSizeMax: 45,
            itemLabelRadiusMax: 0.35,
            overlayImage: wheelPointerImg,
            isInteractive: false,
            rotationSpeedMax: 3000,
            rotationResistance: -200,
            items: getWheelItems()
        }
        if (!effectRun.current) {
            const newWheel = new Wheel(container.current, props);

            setWheel(newWheel);
        }

        return () => {
            effectRun.current = true;
        }
    }, []);

    // Update Wheel Items
    useEffect(() => {
        if (wheel) {
            wheel.items = getWheelItems();
        }
    }, [foodList]);

    return (
        <div className="relative h-full w-screen aspect-square sm:w-full sm:h-auto">
            <div className="wheel-container w-full h-full" ref={container}></div>
            <button onClick={handleSpinClick} className="absolute w-[21%] h-[21%] inset-0 m-auto rounded-full cursor-pointer outline-none"></button>
        </div>
    )
}

export default WheelContainer
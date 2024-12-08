import { Wheel } from '../../node_modules/spin-wheel/dist/spin-wheel-esm.js'
import { useState, useRef, useEffect } from 'react';
import WheelPointer from '../assets/images/WheelPointer.svg'
import useSound from 'use-sound'
import SpinSound from '../assets/sounds/SpinSound.mp3'
import DingSound from '../assets/sounds/DingSound.mp3'

const WheelContainer = ({ foodList }) => {
    const container = useRef(null);
    const effectRun = useRef(false);
    const [wheel, setWheel] = useState(null);
    const [playSpin] = useSound(SpinSound);
    const [playDing] = useSound(DingSound);

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

    // let originalColors = []
    const handleSpinClick = () => {
        if (wheel && foodList) {
            // Untuk reset warna dari roda
            wheel.items = getWheelItems();
            // console.log(originalColors);
            // if (originalColors.length === 0) {
            //     originalColors = wheel.items.map(item => item.backgroundColor); // Store the original colors
            // }

            // for (let i = 0; i < wheel.items.length; i++) {
            //     wheel.items[i].backgroundColor = originalColors[i]; // Restore the original color
            // }

            const randomSpin = Math.floor(Math.random() * (1400 - 900 + 1)) + 900;
            wheel.spin(randomSpin);


            wheel.onCurrentIndexChange = () => {
                playSpin();
            };
            wheel.onRest = () => {
                playDing();
                // Ubah warna makanan tidak terpilih jadi gelap
                for (let i = 0; i < wheel.items.length; i++) {
                    if (i !== wheel.getCurrentIndex()) {
                        wheel.items[i].backgroundColor = null
                    }
                }
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
            itemLabelFontSizeMax: 35,
            itemLabelRadius: 0.90,
            itemLabelRadiusMax: 0.30,
            itemBackgroundColors: ['#5e5e5e'],
            overlayImage: wheelPointerImg,
            isInteractive: false,
            rotationSpeedMax: 20000,
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
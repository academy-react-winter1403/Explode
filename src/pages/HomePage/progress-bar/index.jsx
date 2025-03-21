import { useState, useEffect } from "react";
import jsIcon from '/src/assets/icons/js.svg'
import htmlIcon from '/src/assets/icons/html.svg'
import cssIcon from '/src/assets/icons/css.svg'
import reactIcon from '/src/assets/icons/react.svg'
import figmaIcon from '/src/assets/icons/figma.svg'
import IconSet from "../../../components/shared/IconSet";
const ProgressBar = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        { image: htmlIcon, position: "21%", progressPercent: 25 },
        { image: cssIcon, position: "36%", progressPercent: 40 },
        { image: jsIcon, position: "50%", progressPercent: 54 },
        { image: reactIcon, position: "64%", progressPercent: 68 },
        { image: figmaIcon, position: "78%", progressPercent: 100 },
    ];

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleClick = (index) => {
        setCurrentStep(index);
    };

    return (
        <section className="relative w-full h-[5px] mt-[200px]">
            <div className="absolute  w-full h-[5px] bg-[#D9D9D9]" />
            <div
                className="absolute top-0  left-0 h-[5px] bg-primary rounded-[15px] transition-all duration-500"
                style={{ width: steps[currentStep].progressPercent + "%" }}
            />
            <div className="relative w-full flex items-center ">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="absolute  cursor-pointer flex justify-center"
                        style={{ left: item.position }}
                        onClick={() => handleClick(index)}
                    >
                        <div
                            className={`w-[24px] h-[24px] flex items-center  rounded-full border-5  transition-all bg-white duration-500 ${index <= currentStep ? "  border-primary" : " border-[#D9D9D9]"
                                }`}
                        >

                        </div>

                        <IconSet imageAddress={item.image} firstSize={90} secondSize={90} className={"absolute top-[-100px]"} />
                    </div>
                ))}
            </div>
        </section>
    );
}
export { ProgressBar }

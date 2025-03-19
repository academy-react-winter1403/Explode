import { useState, useEffect, Fragment } from "react";
import IconSet from "../../../../components/shared/IconSet";
import jsIcon from '../../../../assets/icons/js.svg'
import htmlIcon from '../../../../assets/icons/html.svg'
import cssIcon from '../../../../assets/icons/css.svg'
import reactIcon from '../../../../assets/icons/react.svg'
import figmaIcon from '../../../../assets/icons/figma.svg'
const ProgressBar = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        { image: htmlIcon, position: "10%", progressPercent: 15 },
        { image: cssIcon, position: "28%", progressPercent: 33 },
        { image: jsIcon, position: "48%", progressPercent: 53 },
        { image: reactIcon, position: "70%", progressPercent: 75 },
        { image: figmaIcon, position: "88%", progressPercent: 100 },
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
        <section className="relative w-full h-[5px]">
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




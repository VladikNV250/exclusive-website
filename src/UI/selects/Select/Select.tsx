import { useState } from "react";
import classes from "./Select.module.scss";
import Chevron from "@/assets/icons/drop-down.svg";

interface Props {
    options: {
        value: string,
        name: string,
    }[]
    placeholder?: string;
}

export default function Select({options, placeholder}: Props) {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    function handleOptionClick(option: {value: string, name: string}) {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className={classes["select-container"]}>
            <div className={classes["select"]} onClick={() => setIsOpen(!isOpen)}>
                <div className={classes["select-trigger"]}>
                    {selectedOption ? selectedOption.name : placeholder}
                    <Chevron width={24} height={24} />
                </div>
                {isOpen && (
                    <div className={classes["select-options"]}>
                        {options.map((option, index) => (
                            <div 
                                key={index}
                                className={classes["select-option"]}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.name}    
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
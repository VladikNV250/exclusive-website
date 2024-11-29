import classes from "./Radio.module.scss";

interface Props {
    options: string[];
    name: string;
    selectedOption?: string;
}

export default function Radio({options, name, selectedOption = options[0]}: Props) {
    return (
        <div className={classes["radio-container"]}>
            {options.map(option => (
                <input 
                    type="radio" 
                    className={classes["radio"]}
                    name={name + "-customRadio"}
                    value={option}
                    defaultChecked={option === selectedOption}
                />
            ))}
        </div>
    )
}
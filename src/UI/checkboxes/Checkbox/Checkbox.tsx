import classes from "./Checkbox.module.scss";

interface Props {
    isChecked?: boolean;
}

export default function Checkbox({ isChecked = false }: Props) {
    return (
        <label className={classes["checkbox-container"]}> 
            <input 
                type="checkbox" 
                className={classes["checkbox-input"]} 
                checked={isChecked}
            /> 
            <span className={classes["checkbox-custom"]}></span> 
        </label>
    )
}
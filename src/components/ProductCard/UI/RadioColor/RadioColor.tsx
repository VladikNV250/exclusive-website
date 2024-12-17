import classes from "./RadioColor.module.scss";

interface Props {
    colors: string[];
    name: string;
    selectedColor?: string;
}

export function RadioColor({colors, name, selectedColor = colors[0]}: Props) {
    return (
        <div className={classes["radio-container"]}>
            {colors.length > 1 ?
            colors.map((color, key) => (
                <input 
                    key={key}
                    type="radio" 
                    className={classes["color-radio"]}
                    style={{background: color}}
                    name={name + "-radioColors"}
                    value={color}
                    defaultChecked={color === selectedColor}
                />
            )) : null}
        </div>
    )
}
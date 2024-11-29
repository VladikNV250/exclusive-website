import classes from "./InputEmail.module.scss";
import SendIcon from "@/assets/icons/send.svg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  colorStyle?: "white" | "black",
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function InputEmail({className = "", colorStyle = "black", ...inputProps}: Props) {
    return (
        <div className={`${className} ${classes["input-email--container"]}`}>
            <input 
                type="text" 
                className={classes[`input-email__${colorStyle}`]}
                placeholder="Enter your email"
                {...inputProps}
            />
            <SendIcon className={classes[`icon__${colorStyle}`]} width={24} height={24} />
        </div>
    )
}
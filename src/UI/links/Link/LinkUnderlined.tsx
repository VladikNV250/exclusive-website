import { Link } from "react-router-dom";
import classes from "./Link.module.scss";

interface Props {
    to: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export default function LinkUnderlined({to, onClick, children, className = ""}: Props) {
    return (
        <Link 
            className={`${classes["link"]} ${className}`} 
            to={to}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}
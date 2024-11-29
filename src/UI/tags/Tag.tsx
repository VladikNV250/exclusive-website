import classes from "./Tag.module.scss";

interface Props {
    type?: "new" | "discount";
    children?: React.ReactNode;
}

export default function Tag({type = "new", children}: Props) {
    return (
        <div className={classes[`tag__${type}`]}>
            {type === "new"
            ? "NEW"
            : children}
        </div>
    )
}
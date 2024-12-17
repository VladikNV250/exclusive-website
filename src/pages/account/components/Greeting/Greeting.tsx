import classes from "./Greeting.module.scss";

interface Props {
    firstName: string,
    lastName: string,
}

export default function Greeting({firstName, lastName}: Props) {
    return (
        <p className={classes["greeting"]}>
            Welcome! <span className={classes["text-highlight"]}>{firstName} {lastName}</span>
        </p>
    )
}
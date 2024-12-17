import classes from "./ButtonAdditional.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    name: string;
    btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export function ButtonAdditional({Icon, name, ...btnProps}: Props) {
    return (
        <button className={classes["additional-button"]} name={name} {...btnProps}>
            <Icon width={24} height={24} />
        </button>
    )
}
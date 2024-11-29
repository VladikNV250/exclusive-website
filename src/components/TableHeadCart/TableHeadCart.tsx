import classes from "./TableHeadCart.module.scss";

interface Props {
    headers: string[];
}

export default function TableHeadCart({headers}: Props) {
    return (
        <thead>
            <tr>
                {headers.map(header => 
                    <th>{header}</th>
                )}
            </tr>
        </thead>
    )
}
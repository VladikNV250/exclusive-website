import formatPrice from '@/helpers/formatPrice';
import classes from './TotalItem.module.scss';

interface Props {
    order: string,
    summary: number,
}

export function TotalItem({order, summary}: Props) {
    return (
        <p className={classes["item"]}>
            <span>{order}</span>
            <span>{summary > 0 ? formatPrice(summary) : "Free"}</span>
        </p>
    )
}
import { TotalItem } from '@/components/TotalItem';

interface Props {
    order: string,
    summary: number,
}

export default function CartTotalItem({order, summary}: Props) {
    return (
        <TotalItem order={order} summary={summary} />
    )
}
import { TotalItem } from '@/components/TotalItem';

interface Props {
    order: string,
    summary: number,
}

export default function CheckoutTotalItem({order, summary}: Props) {
    return (
        <TotalItem order={order} summary={summary} />
    )
}
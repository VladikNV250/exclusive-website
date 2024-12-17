import InputProductQuantity from "@/UI/inputs/InputProductQuantity/InputProductQuantity";
import useQuantity from "../../hooks/useQuantity";

interface Props {
    defaultQuantity?: number;
}

export default function ProductQuantity({defaultQuantity = 1}: Props) {
    const {quantity, increment, decrement} = useQuantity(defaultQuantity);

    return (
        <InputProductQuantity  
            quantity={quantity}
            increment={increment}
            decrement={decrement}
        />
    )
}
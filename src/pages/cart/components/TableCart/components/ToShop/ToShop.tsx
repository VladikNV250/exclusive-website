import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import { Link } from "react-router-dom";

export default function ToShop() {
    return (
        <Link to={"/"}>
            <ButtonOutlined>
                Return To Shop
            </ButtonOutlined>
        </Link>
    )
}
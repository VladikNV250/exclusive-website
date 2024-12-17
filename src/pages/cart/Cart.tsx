import Roadmap from "@/components/Roadmap/Roadmap";
import CartContent from "./components/CartContent/CartContent";
import { TableCart } from "./components/TableCart";

export default function Cart() {
    const links = [
        {name: "Home", url: "/"},
        {name: "Cart", url: "/cart"},
    ]

    return (
        <main>
            <Roadmap links={links} />
            <TableCart />
            <CartContent />
        </main>
    )
}
import Roadmap from "@/components/Roadmap/Roadmap";
import classes from "./CheckOut.module.scss";
import CheckoutHeader from "./components/CheckoutHeader/CheckoutHeader";
import { DetailsForm } from "@/modules/DetailsForm";
import CheckoutProductList from "./components/CheckoutProductItem/CheckoutProductItem";
import CheckoutTotalItem from "./components/CheckoutTotalItem/CheckoutTotalItem";
import { PaymentMethod } from "@/modules/PaymentMethod/PaymentMethod";
import { Coupon } from "@/modules/Coupon";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import CheckoutProductItem from "./components/CheckoutProductItem/CheckoutProductItem";
import gamepad from "@/assets/products/gamepad.png";
import monitor from "@/assets/products/gaming-monitor.png";

export default function CheckOut() {
    const links = [
        {name: "My account", url: "/account"},
        {name: "Product", url: "/havic-3-pro"},
        {name: "View Cart", url: "/cart"},
        {name: "Checkout", url: "/checkout"},
    ]
    const goods = [
        {image: gamepad, name: "HAVIT HV-G92 Gamepad", price: 240},
        {image: monitor, name: "IPS LCD Gaming Monitor", price: 370},
    ]

    return (
        <main className={classes["checkout"]}>
            <Roadmap links={links} />
            <section className={classes["checkout-section"]}>
                <div className={classes["checkout-container"]}>
                    <section className={classes["checkout-content__one"]}>
                        <CheckoutHeader>
                            Billing Details
                        </CheckoutHeader>
                        <DetailsForm />
                    </section>
                    <section className={classes["checkout-content__two"]}>
                        <div className={classes["product-item-container"]}>
                            {goods.map((product) => 
                                <CheckoutProductItem {...product} />                            
                            )}
                        </div>
                        <div className={classes["total-item-wrapper"]}>
                            <CheckoutTotalItem order="Subtotal:" summary={610} />
                            <CheckoutTotalItem order="Shipping:" summary={0} />
                            <CheckoutTotalItem order="Total:" summary={610} />
                        </div>
                        <PaymentMethod />
                        <div className={classes["coupon-wrapper"]}>
                            <Coupon />                            
                        </div>
                        <PlaceOrder />
                    </section>
                </div>          
            </section>
            
        </main>
    )
}
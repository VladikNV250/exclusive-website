import InputInfoBox from "@/UI/inputs/InputInfoBox/InputInfoBox";
import classes from "./CardForm.module.scss";

export default function CardForm() {
    return (
        <form className={classes["form"]} id="card-form" action="">
            <InputInfoBox name="card-number" placeholder="Card Number" type="number" />
            <div className={classes["inputs-container"]}>
                <InputInfoBox name="ex-date" placeholder="Expiration Date (mm/yy)" type="number" />
                <InputInfoBox name="cvv" placeholder="CVV" type="number"/>
            </div>
        </form>
    )
}
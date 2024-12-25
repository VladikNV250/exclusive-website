import classes from "./ButtonQuickView.module.scss";
import ButtonCircle from "@/UI/buttons/ButtonCircle/ButtonCircle";
import QuickViewIcon from "@/assets/icons/quick-view.svg";

export default function ButtonQuickView() {
    return (
        <ButtonCircle>
            <QuickViewIcon width={24} height={24} className={classes["view"]} />            
        </ButtonCircle>
    )   
}
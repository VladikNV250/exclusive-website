import classes from "./SaveChanges.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";

export default function SaveChanges() {
    return (
        <div className={classes["button-wrapper"]}>
            <ButtonLarge>
                Save Changes
            </ButtonLarge>
        </div>
        
    )
}
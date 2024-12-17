import Checkbox from '@/UI/checkboxes/Checkbox/Checkbox';
import classes from './SaveCheckbox.module.scss';

export default function SaveCheckbox() {
    return (
        <div className={classes["checkbox-wrapper"]}>
            <Checkbox name="save-info" checked={true}  />
            <p className={classes["save-info"]}>
                Save this information for faster check-out next time
            </p>
        </div>
    )
}
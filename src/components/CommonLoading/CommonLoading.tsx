import Modal from "@/UI/modals/Modal/Modal";
import classes from "./CommonLoading.module.scss";

export default function CommonLoading() {
    return (
        <>
            <div className={classes["loading-content"]} />
            <Modal isOpen={true}>
                <h1 className={classes["loading"]}></h1>
            </Modal>        
        </>
        
    )
}
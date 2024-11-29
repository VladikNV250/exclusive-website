import classes from "./CommonLoading.module.scss";

export default function CommonLoading() {
    return (
        <>
            <div className={classes["loading-content"]} />
            <div className={classes["loading-container"]}>
                <h1 className={classes["loading"]}></h1>
            </div>
        </>
        
    )
}
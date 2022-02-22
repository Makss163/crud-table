import React from "react";
import MyButton from "./UI/MyButton";
import classes from "./styles_modules/MyModal.module.css"

function MyModal({children, visible, changeVisible}) {

    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active);
    }


    return (
        <div className={ rootClasses.join(' ') } >
            <div className={classes.modalContent} >
                <span className={classes.modalText} >{children}</span>
                <MyButton btnText="OK" click={changeVisible} ></MyButton>
            </div>
        </div>
    );
}

export default MyModal;
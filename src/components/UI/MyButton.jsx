import React from "react";
import classes from "../styles_modules/MyButton.module.css"

function MyButton({ btnText, click }) {
    return (
        <button className={classes.myBtn} onClick={click} > {btnText} </button>
    );
}

export default MyButton;
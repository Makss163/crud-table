import React from "react";
import MyInput from "./UI/MyInput";
import classes from "./styles_modules/Column.module.css";

function ColumnInput(props) {

  const setStateUser = (value) => {
    props.change(value);
  }

  return (
    <div className={classes.column} >
        <MyInput 
          number={props.number}
          value={props.value}
          nameField={props.nameField} 
          change={setStateUser} 
        />
    </div>
  );
}

export default ColumnInput;
import React from "react";
import MyInput from "./UI/MyInput";
import classes from "./styles_modules/Column.module.css";

function Column( { readOnlyMode, nameField, field, change } ) {

  const setStateUser = (value) => {
    change(value);
  }

  return (
    <div className={classes.column} >
      <MyInput 
        readOnlyMode = {readOnlyMode}
        nameField={nameField} 
        value={field} 
        change={setStateUser} 
      />
    </div>
  );
}

export default Column;
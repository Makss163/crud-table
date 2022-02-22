import React from "react";
import classes from "./../styles_modules/MyInput.module.css"

function MyInput( { readOnlyMode, nameField, value, change } ) {

  let readOnlyOpt = {};
  let inpType = "text";

  if (nameField === 'phone') {
    inpType = "number"
  }

  if (readOnlyMode) {
    readOnlyOpt = {readOnly: 'readonly'};
  }

  return (
    <input
      {...readOnlyOpt}
      className={classes.myInp} 
      type={inpType}
      value={value}
      onChange={e => change({[nameField]: e.target.value})}
    />
  );
  
}

export default MyInput;
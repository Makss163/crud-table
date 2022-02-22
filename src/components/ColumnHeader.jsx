import React from "react";
import classes from "./styles_modules/Column.module.css";

function ColumnHeader({ columnName }) {
  return (
    <div className={classes.column} >
        <span>{columnName}</span>
    </div>
  );
}

export default ColumnHeader;
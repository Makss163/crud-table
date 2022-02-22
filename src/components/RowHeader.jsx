import React from "react";
import classesRow from "./styles_modules/Row.module.css";
import classesCul from "./styles_modules/Column.module.css";

function RowHeader() {

  return (
    <div className={classesRow.rowWrapper} >
      <div className={classesRow.row}>
          
          <div  className={classesCul.column} >
            <span>id</span>
          </div>

          <div  className={classesCul.column} >
            <span>name</span>
          </div>

          <div  className={classesCul.column} >
            <span>email</span>
          </div>
          
          <div  className={classesCul.column} >
            <span>website</span>
          </div>

      </div>
      <div className={classesCul.column} >Action</div>
    </div>
  );
}

export default RowHeader;
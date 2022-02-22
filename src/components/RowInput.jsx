import React, { useState } from "react";
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
import classesRow from "./styles_modules/Row.module.css";
import classesCul from "./styles_modules/Column.module.css";

function RowInput( { visible, save } ) {

  let [newUser, setNewUser] = useState({ name: '',  email: '', website: '' });
  let [errDiv, setErrDiv] = useState('');

  const addFieldNewUser = (addedField) => {
    setNewUser( { ...newUser, ...addedField } );
  }

  const checkEmptyNewUser = (user) => {
    return !Object.values(user).includes('');
  } 
  
  const saveNewUser = () => {
    if (checkEmptyNewUser(newUser)) {
      save(newUser);
      setNewUser({ name: '',  email: '', website: '' });
      setErrDiv('');
    } else {
      setErrDiv(<div style={{color: 'red'}} >Заполните все данные</div>);
    }
  }

  let className = classesRow.hidden;

  if (visible) {
    className = classesRow.rowWrapper;
  }

  return (
    <div className={className} >
        <div className={classesRow.row}>
            
            <div className={classesCul.column} >
              <MyInput 
                readOnlyMode={false}
                nameField="name"
                value={newUser.name}
                change={addFieldNewUser} 
              />
            </div>
            <div className={classesCul.column} >
              <MyInput 
                readOnlyMode={false}
                nameField="email"
                value={newUser.email}
                change={addFieldNewUser} 
              />
            </div>
            <div className={classesCul.column} >
              <MyInput 
                readOnlyMode={false}
                nameField="website"
                value={newUser.website}
                change={addFieldNewUser} 
              />
            </div>
            
        </div>
        <div className={classesCul.column} >
            <MyButton click={saveNewUser} btnText="Сохранить" />
            {errDiv}
        </div>
    </div>
  );
}

export default RowInput;
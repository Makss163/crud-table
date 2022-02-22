import React, { useState } from "react";
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
import classesRow from "./styles_modules/Row.module.css";
import classesCul from "./styles_modules/Column.module.css";


function Row({id, name, username, email, phone, website, change, remove}) {
  
  let [user, setUser] = useState( { id: id, name: name, username: username, email: email, phone: phone, website: website } );
  
  let [readOnlyMode, setReadOnlyMode] = useState(true);
  let [errDiv, setErrDiv] = useState('');

  let contentButton = readOnlyMode ? 'Редактировать' : 'Сохранить';

  /* 
    при вводе каждого символа в инпут
    перезаписываются поля объекта одного пользователя в данной строке
  */
  const changeUser = (value) => {
    setUser({...user, ...value});
  }

  
  const saveChangeUser = () => {
    change(user, id);
  }

  const checkEmptyNewUser = (user) => {
    return !Object.values(user).includes('');
  } 

  const deleteUser = () => {
    remove(id);
  }

  const functionForOnClick = () => {
    if (checkEmptyNewUser(user)) {
      if (readOnlyMode) {
        setReadOnlyMode(false);
      } else {
        setReadOnlyMode(true);
        saveChangeUser();
      }
      setErrDiv('');
    } else {
      setErrDiv(<div style={{color: 'red'}} >Заполните все данные</div>);
    }
  }

  return (
    <div className={classesRow.rowWrapper}>
        <div className={classesRow.row}>
            
            <div className={classesCul.column} >
                <MyInput 
                  readOnlyMode = {true}
                  nameField="id"
                  value={user.id} 
                  change={changeUser} 
                />
            </div>
            <div className={classesCul.column} >
                <MyInput 
                  readOnlyMode = {readOnlyMode}
                  nameField="name"
                  value={user.name} 
                  change={changeUser} 
                />
            </div>
            <div className={classesCul.column} >
                <MyInput 
                  readOnlyMode = {readOnlyMode}
                  nameField="email"
                  value={user.email} 
                  change={changeUser} 
                />
            </div>
            <div className={classesCul.column} >
                <MyInput 
                  readOnlyMode = {readOnlyMode}
                  nameField="website"
                  value={user.website} 
                  change={changeUser} 
                />
            </div>
            
        </div>
        <div className={classesCul.column} >
            <MyButton click={functionForOnClick} btnText={contentButton} />
            {errDiv}
            <MyButton click={deleteUser} btnText="Удалить запись" />
        </div>
    </div>
      

  )

}

export default Row;
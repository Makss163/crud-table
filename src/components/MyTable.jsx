import React, { useState } from 'react';
import getAxios from '../scripts/getAxios';
import Row from './Row';
import RowHeader from './RowHeader';
import RowInput from './RowInput';
import MyButton from './UI/MyButton';
import Loader from './Loader';
import classes from "./styles_modules/MyTable.module.css"


function MyTable( { users, changeVisibleModal, url } ) {

  let [usersDB, setUsersDB] = useState(users);
  let [inputRowVisible, setVisibleInputRow] = useState(false);
  let [isLoaded, setIsLoaded] = useState(true);

  const textButton = inputRowVisible ? 'Отменить новую запись' : 'Добавить запись';

  /* function updateLocalDataById(id) {

    const optAxios = {
      method: 'GET',
      url: url + id,
    };

    const funcResponseForAxios = (response) => {
      console.log(response.data);

      function callback(item) {
        if (item.id === id) {
          return { ...response.data }
        } else {
          return item;
        }
      }
      const updateUsers = usersDB.map(callback);
      setUsersDB( updateUsers );
      setIsLoaded(true);
      console.log('локальные данные обновлены');
    };

    const funcErrForAxios = (error) => {
      changeVisibleModal(error.message);
      console.log(error.message);
    };

    setIsLoaded(false);
    getAxios( optAxios, funcResponseForAxios, funcErrForAxios );

  } */

  const addNewUser = (newUser) => {
    const optAxios = {
      method: 'POST',
      url: url,
      body: newUser,
      data: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    const funcResponseForAxios = (response) => {
      console.log(response.data);
      const newUser = { ...response.data };
      setUsersDB( [ ...usersDB, newUser ] );
      setIsLoaded(true);
    };

    const funcErrForAxios = (error) => {
      changeVisibleModal(error.message);
      console.log(error.message);
    };
    setIsLoaded(false);
    getAxios( optAxios, funcResponseForAxios, funcErrForAxios );

  }

  const updateUser = (updatedUser, id) => {

    const optAxios = {
      method: 'PUT',
      url: url + id,
      body: JSON.stringify(updatedUser),
      data: JSON.stringify(updatedUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    const funcResponseForAxios = (response) => {
      console.log(response);
      const id = response.data.id;
      function callback(item) {
        if (item.id === id) {
          return { ...response.data }
        } else {
          return item;
        }
      }
      const updateUsers = usersDB.map(callback);
      setUsersDB( updateUsers );
      setIsLoaded(true);
      console.log('локальные данные обновлены');
    };

    const funcErrForAxios = (error) => {
      changeVisibleModal(error.message);
      console.log(error.message);
    };
    setIsLoaded(false);
    getAxios( optAxios, funcResponseForAxios, funcErrForAxios );

  }

  const deleteUser = (idFromDataBase) => {
    
    const optAxios = {
      method: 'DELETE',
      url: url + idFromDataBase,
    };

    const funcResponseForAxios = (response) => {
      console.log(response);
      const filterUsers = usersDB.filter( item => item.id !== idFromDataBase );
      setUsersDB( filterUsers );
      setIsLoaded(true);
    };

    const funcErrForAxios = (error) => {
      changeVisibleModal(error.message);
      console.log(error.message);
    };
    setIsLoaded(false);
    getAxios( optAxios, funcResponseForAxios, funcErrForAxios );

  }

  const useToggleInputRow = () => {
    if (!inputRowVisible) {
      setVisibleInputRow(true);
    } else {
      setVisibleInputRow(false);
    }
    
  };

  return (
    <div className={classes.tableWrapper} >
      <MyButton btnText={textButton} click={useToggleInputRow} />
      {isLoaded
        ?
          <div className={classes.table}>
            <RowHeader />
            <RowInput visible={inputRowVisible} save={addNewUser} />
            
            {
              usersDB.map( 
                (user) => <Row 
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                            id={user.id}
                            website={user.website}
                            change={updateUser} 
                            remove={deleteUser} 
                          /> 
              )
            }
            
          </div>
        : 
          <div style={{display: 'flex', justifyContent: 'center'}}> <Loader></Loader> </div>
      }
      
    </div>
  );
}

export default MyTable;
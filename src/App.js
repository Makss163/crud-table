
import React, { useState, useEffect } from 'react';
import MyTable from './components/MyTable';
import MyModal from './components/MyModal';
import getAxios from './scripts/getAxios';
import Loader from './components/Loader';
import "./styles/App.css"
import classes from "./components/styles_modules/MyTable.module.css"

function App() {

  let [usersDB, setUsersDB] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  let [visibleModal, setVisibleModal] = useState(false);
  let [messageModal, setMessage] = useState('');
  //const BASIC_URL = 'http://178.128.196.163:3000/api/records/'
  const BASIC_URL = 'https://jsonplaceholder.typicode.com/users/'
  

  useEffect( () => {
    getUsersDB();
  } , [] );

  async function getUsersDB() {

    let optAxios = {
      method: 'GET',
      url: BASIC_URL,
    };

    const funcResponseForAxios = (response) => {
      console.log(response.data);
      setUsersDB(response.data);
      setIsLoaded(true);
    };

    const funcErrForAxios = (error) => {
      setMessage(error.message);
      console.log(error);
    }

    setIsLoaded(false);
    getAxios( optAxios, funcResponseForAxios, funcErrForAxios );
    
  }

  const showModal = (message) => {
    setMessage(message);
    setVisibleModal(true);
  }

  const hideModal = () => {
    setVisibleModal(false);
    window.location.reload();
  }

  return (
    
    <div className="App">
      
      <MyModal
        visible={visibleModal}
        changeVisible={hideModal}
      >{messageModal}
      </MyModal>
      <div className={classes.tableWrapper} >
        {isLoaded
          ? <MyTable users={usersDB} changeVisibleModal={showModal} url={BASIC_URL} />
          : <div style={{display: 'flex', justifyContent: 'center'}}> <Loader></Loader> </div>
        }
      </div>
      
      
    </div>

  );
}

export default App;

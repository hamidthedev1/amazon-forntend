import { useContext, useEffect } from 'react';
import { DataContext } from './components/DataProvider/DataProvider';
import { Type } from './Utility/action.type';
import { auth } from './Utility/firebase';
import './App.css'

import Router from './Router';
function App() {
  const[{user}, dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          authUser:null
        })
  }
})
  },[])
  return (
    <>
      <Router/>
    </>
  );
}

export default App

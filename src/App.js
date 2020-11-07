import React, { useEffect } from 'react';
import './App.css';
import Chat from './features/Chat';
import Sidebar from './features/Sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from './features/userSlice'
import Login from './features/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is", authUser);
      if(authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;

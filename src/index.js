import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



firebase.initializeApp({
  apiKey: "AIzaSyCs7k581kh35Bs7-92DCAoLzgmzHZs7QkE",
  authDomain: "chat-v0-e186c.firebaseapp.com",
  projectId: "chat-v0-e186c",
  storageBucket: "chat-v0-e186c.appspot.com",
  messagingSenderId: "943393891930",
  appId: "1:943393891930:web:395d4614f505687202da63",
  measurementId: "G-R8LF63QPHZ"
}
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

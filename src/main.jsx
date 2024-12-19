import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAp_rOcBWURNGDFHfre-i1r_SRr32B9nxQ",
  authDomain: "e-commerce-react-cc1d8.firebaseapp.com",
  projectId: "e-commerce-react-cc1d8",
  storageBucket: "e-commerce-react-cc1d8.appspot.com",
  messagingSenderId: "9496314362",
  appId: "1:9496314362:web:545ea4bca4e540dd2e6443"
};


const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


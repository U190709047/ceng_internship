import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './bootstarp-override.scss';
import App from './App';
import UserSignUpPage from './pages/UserSignUpPage';
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';
import './i18n';
import LanguageSelector from "./Components/LanguageSelector";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <LoginPage/>
    <LanguageSelector/>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import SignIn from './Pages/SignIn';
// import {BrowserRouter} from 'react-router-dom';
// import Routes from './routes';

// import SignUp from './Pages/SignUp';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';


function App() {
  
  return (
    <>
      <AuthProvider>
        <SignIn/>
        {/* <BrowserRouter>
          <Routes/>
        </BrowserRouter> */}
      </AuthProvider>
      <ToastContainer/>
      <GlobalStyle/>
    </>
  );
}

export default App;

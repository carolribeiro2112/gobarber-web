import React from 'react';
import SignIn from './Pages/SignIn';
// import {BrowserRouter} from 'react-router-dom';
// import Routes from './routes';

// import SignUp from './Pages/SignUp';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

function App() {
  
  return (
    <>
      <AppProvider>
        <SignIn/>
        {/* <BrowserRouter>
          <Routes/>
        </BrowserRouter> */}
      </AppProvider>
    
      <GlobalStyle/>
    </>
  );
}

export default App;

import React from 'react';
import SignIn from './Pages/SignIn';
// import {BrowserRouter} from 'react-router-dom';
// import Routes from './routes';

import SignUp from './Pages/SignUp';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <SignUp/>
      {/* <BrowserRouter>
        <Routes/>
      </BrowserRouter> */}
      <GlobalStyle/>
    </>
  );
}

export default App;

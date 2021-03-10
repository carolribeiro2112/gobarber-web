import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const Routes: React.FC = () => {
  return(
    <Switch>
      <Route path='/' exact component={SignIn}/>
      <Route path='/signup' exact component={SignUp}/>
    </Switch>
  )
}

export default Routes;
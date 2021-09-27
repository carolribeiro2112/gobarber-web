import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import Profile from '../Pages/Profile';

const Routes: React.FC = () => {
  return(
    <Switch>
      <Route path='/' exact component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/forgot-password' component={ForgotPassword}/>
      <Route path='/reset-password' component={ResetPassword}/>
      
      <Route path='/profile' isPrivate component={Profile}/>
      <Route path='/dashboard' isPrivate component={Dashboard}/>
    </Switch>
  )
}

export default Routes;
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SignUp from './components/SignUp' 
import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"

function App() {

  return (
    <AuthProvider>
      <div>
        <div className="w-100">
          <Router>
            <Header />
            <Switch>
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/" exact component={Dashboard}/>
              <PrivateRoute path="/update-profile" exact component={UpdateProfile}/>
              <Route path='/login' component={Login}/>
              <Route path='/forgot-password' component={ForgotPassword}/>
              <Route path='/about' component={About} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

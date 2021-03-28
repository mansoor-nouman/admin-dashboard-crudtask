import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from'./topbar';
import Dashboard from './dashboard';
import Users from './Users';
import CreateUser from './createUser';
import EditUser from "./edituser";
import Profile from "./profile"
import {UserProvider} from "./usercontext"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
   <div id="wrapper">
          <Sidebar></Sidebar>
          <UserProvider>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
      <Switch>
          <Route path="/" exact="true">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/users" exact="true">
          <Users></Users>
          </Route>
          <Route path="/create-user" exact="true">
          <CreateUser></CreateUser>
          </Route>
          <Route path="/edit-user/:userid" component = {EditUser} exact={true}/>
          <Route path="/profile/:userid" component = {Profile} exact={true}/>
      
      </Switch>
      
      </div>
    </div>
    </div>
    </UserProvider>
   </div>
   </Router>
  );
}

export default App;

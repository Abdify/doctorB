import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
              <Route path="/appointment">
                  <Appointment />
              </Route>
              <Route path="/dashboard/appointment">
                  <Dashboard></Dashboard>
              </Route>
              <Route path="/dashboard/allPatients">
                  <AllPatients></AllPatients>
              </Route>
              <Route path="/login">
                  <Login></Login>
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="*">
                  <NotFound />
              </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;

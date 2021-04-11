import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

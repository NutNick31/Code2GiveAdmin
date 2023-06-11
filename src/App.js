import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserInfo from './Pages/userInfo'
import CounsellingInfo from './Pages/CounsellingInfo'
import Location from './Pages/Location';
import Results from './Pages/Results';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
        <Switch>
           <Route exact path="/">
              <Home />
           </Route>

           <Route path="/userinfo">
              <UserInfo />
           </Route>

           <Route path="/counsellinginfo">
              <CounsellingInfo />
           </Route>
           <Route path="/locationinfo">
              <Location />
           </Route>
           <Route path="/result">
              <Results />
           </Route>

        </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

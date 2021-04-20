import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { DEF_LANG } from './config.json';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:lang'>
          <Home />
        </Route>
        <Redirect to={`/${DEF_LANG}`} />
      </Switch>
    </Router>
  );
}

export default App;

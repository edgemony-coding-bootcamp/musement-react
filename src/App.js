import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import { DEF_LANG } from './config.json';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
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

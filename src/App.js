import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:lang'>
          <Home />
        </Route>
        <Redirect to='/uk' />
      </Switch>
    </Router>
  );
}

export default App;

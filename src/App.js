import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import { DEF_LANG } from './config.json';
import { SetLangInEndpoint } from './services/axiosConfig';
import { useSelector } from 'react-redux';

function App() {
  const { userLang } = useSelector((state) => state.languages);
  console.log(userLang);
  SetLangInEndpoint(userLang);

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

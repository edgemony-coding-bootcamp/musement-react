import {
  Link,
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import Activities from './Activities';

import { DEF_LANG } from '../config.json';

const langConfig = [
  'uk',
  'us',
  'it',
  'fr',
  'de',
  'es',
  'pt',
  'br',
  'ru',
  'nl',
  'pl',
];

function Home() {
  let { path, url } = useRouteMatch();
  let { lang } = useParams();
  let history = useHistory();

  const langUrl = langConfig.find((value) => value === lang);
  if (!langUrl) {
    const newUrl = history.location.pathname.replace(`/${lang}`, '');
    history.push(`/${DEF_LANG}${newUrl}`);
  }
  return (
    <>
      <div>Header</div>

      <Link to={`${url}/activities`}>link ad activities</Link>

      <Switch>
        <Route exact path={`${path}/activities`}>
          <Activities />
        </Route>

        <Route path={`${path}/*`}>
          <h1>404</h1>
        </Route>
      </Switch>
      <div>Footer</div>
    </>
  );
}

export default Home;

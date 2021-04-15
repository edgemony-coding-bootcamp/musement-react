import {
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import Carousel from '../components/Carousel';

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
  let { path } = useRouteMatch();
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
      <Carousel />
      <Switch>
        <Route path={`${path}/*`}>
          <h1>404</h1>
        </Route>
      </Switch>
      <div>Footer</div>
    </>
  );
}

export default Home;

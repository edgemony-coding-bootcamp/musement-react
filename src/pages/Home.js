import Hero from '../components/Hero';
import CategoriesNav from '../components/CategoriesNav';
import { Main } from '../styles';
import {
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

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
      <Switch>
        <Route path={`/${lang}`}>
          <CategoriesNav />
          <Main>
            <Hero />
          </Main>
        </Route>
        <Route path={`${path}/*`}>
          <h1>404</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Home;

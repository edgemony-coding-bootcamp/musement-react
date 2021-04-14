import {
  Link,
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import Activities from './Activities';

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

  /* Here we are checking the lang param in order to see if it is a supported language,
  if not, the application will set the default languange in 'uk'  */

  const langUrl = langConfig.find((value) => value === lang);
  if (!langUrl) {
    /*  at this point we are creating a dinamic path redirect in order to set the default 
    languange also in other routes  */

    const newUrl = history.location.pathname.replace(`/${lang}`, '');
    history.push(`/uk${newUrl}`);
  }
  return (
    <>
      <div>Header</div>

      {/* this link and the activities route are for test purposes */}
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

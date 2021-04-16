import { useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoryActions';
import { setUserLang } from '../redux/languages/languageActions';
import axios from 'axios';
import { useSelector } from 'react-redux';

import {
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import { DEF_LANG, SUPPORTED_LANGUAGES } from '../config.json';
import { useEffect } from 'react';

const langConfig = Object.keys(SUPPORTED_LANGUAGES);

function Home() {
  const dispatch = useDispatch();
  const langState = useSelector((state) => state.languages);
  let { path } = useRouteMatch();
  let { lang } = useParams();
  let history = useHistory();

  // url check
  const langUrl = langConfig.find((value) => value === lang);
  if (!langUrl) {
    const newUrl = history.location.pathname.replace(`/${lang}`, '');
    history.push(`/${DEF_LANG}${newUrl}`);
  }

  // dynamic headers based on the language
  axios.defaults.baseURL = 'https://sandbox.musement.com/api/v3/';
  axios.defaults.headers = {
    'x-musement-version': '3.4.0',
    'accept-language': `${langState.userLang}`,
  };

  useEffect(() => {
    dispatch(setUserLang(lang));

    /* this dispatch is here for test purposes, atm it is working with a 1ms timeout */
    setTimeout(() => {
      dispatch(fetchCategories());
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <>
      <div>Header</div>

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

import Hero from '../components/Hero';
import CategoriesNav from '../components/CategoriesNav';
import { Main } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUserLang } from '../redux/languages/languageActions';

import {
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import Carousel from '../components/Carousel';

import { DEF_LANG, SUPPORTED_LANGUAGES } from '../config.json';
import { setLangHeader } from '../services/axiosConfig';

function Home() {
  const { userLang } = useSelector((state) => state.languages);

  const dispatch = useDispatch();
  let { path } = useRouteMatch();
  let { lang } = useParams();
  let history = useHistory();

  // getting the keys of supported values from config,json in order to check if the url is valid
  const langConfig = Object.keys(SUPPORTED_LANGUAGES);

  // url check with keys from config.json
  const isValidLanguage = langConfig.includes(lang);
  if (!isValidLanguage) {
    const newUrl = history.location.pathname.replace(`/${lang}`, '');
    history.push(`/${DEF_LANG}${newUrl}`);
  }

  useEffect(() => {
    dispatch(setUserLang(lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // setting the language for the header
  setLangHeader(userLang);

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

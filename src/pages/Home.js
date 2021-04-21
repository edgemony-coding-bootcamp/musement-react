import Hero from '../components/Hero';
import Header from '../components/Header';
import { CarouselSection, Main } from '../styles';
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

import { DEF_LANG, LANGUAGES } from '../config.json';
import { setLangHeader } from '../services/axiosConfig';
import Carousel from '../components/Carousel';
import FeaturedExperiences from '../components/FeaturedExperiences';
import CarouselTitle from '../components/CarouselTitle';
import Footer from '../components/Footer';

function Home() {
  const { userLang } = useSelector((state) => state.languages);

  const dispatch = useDispatch();
  let { path } = useRouteMatch();
  let { lang } = useParams();
  let history = useHistory();
  useEffect(() => {
    dispatch(setUserLang(lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  setLangHeader(userLang);

  // getting the keys of supported values from config,json in order to check if the url is valid
  const langConfig = LANGUAGES.map((item) => item.id);

  // url check with keys from config.json
  const isValidLanguage = langConfig.includes(lang);
  if (!isValidLanguage) {
    const newUrl = history.location.pathname.replace(`/${lang}`, '');
    history.push(`/${DEF_LANG}${newUrl}`);
  }

  // setting the language for the header

  return (
    <>
      <Header />
      <Switch>
        <Route path={`/${lang}`}>
          <Main>
            <Hero />
            <CarouselSection>
              <CarouselTitle title={'Featured Experiences'} />
              <Carousel>
                <FeaturedExperiences />
              </Carousel>
            </CarouselSection>
            <Footer />
          </Main>
        </Route>
        <Route path={`${path}/:category`}>
          <h1>404</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Home;

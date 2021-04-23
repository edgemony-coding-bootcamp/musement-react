import Hero from '../components/Hero';
import Header from '../components/Header';
import { CarouselSection, Main } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUserLang } from '../redux/languages/languageActions';
import { translateTexts } from '../redux/translations/translationActions';

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
    const langConfig = LANGUAGES.map((item) => item.id);
    const isValidLanguage = langConfig.includes(lang);
    if (!isValidLanguage) {
      const newUrl = history.location.pathname.replace(`/${lang}`, '');
      history.push(`/${DEF_LANG}${newUrl}`);
    }
    dispatch(setUserLang(lang));
    dispatch(translateTexts(userLang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, userLang]);

  setLangHeader(userLang);

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
            <Footer lang={lang} />
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

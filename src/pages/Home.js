import Hero from '../components/Hero';
import Header from '../components/Header';
import NotFound from './NotFound';
import {
  CarouselSection,
  DummyCardContent,
  DummyCardImg,
  DummyCardWrapper,
  Main,
} from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUserLang } from '../redux/languages/languageActions';
import { translateTexts } from '../redux/translations/translationActions';
import { fetchInspirations } from '../redux/inspirations/inspirationActions';

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
import CarouselTitle from '../components/CarouselTitle';
import Footer from '../components/Footer';
import Activities from './Activities';
import { Category } from './Category';
import Card from '../components/Card';
import { fetchExperiences } from '../redux/experiences/experienceActions';
import { SimpleCard } from '../components/SimpleCard';
import { fetchCategories } from '../redux/categories/categoryActions';
import { fetchPopularExperiences } from '../redux/popular-experiences/popularExperienceActions';

function Home() {
  const { userLang } = useSelector((state) => state.languages);
  const { userCurrency } = useSelector((state) => state.currencies);
  const experiencesState = useSelector((state) => state.experiences);
  const { experiences, loading: experienceLoading } = experiencesState;
  const { inspirations } = useSelector((state) => state.inspirations);
  const { popularExperiences, loading: popularExperienceLoading } = useSelector(
    (state) => state.popularExperiences
  );

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

    dispatch(fetchCategories());
    dispatch(fetchExperiences());
    dispatch(fetchInspirations());
    dispatch(fetchPopularExperiences(7));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, userLang, userCurrency]);

  setLangHeader(userLang);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path={`/${lang}/activities/:id`}>
            <Activities />
          </Route>
          <Route exact path={`/${lang}/:idCateg`}>
            <Category />
          </Route>
          <Route exact path={`/${lang}`}>
            <Hero />
            <CarouselSection>
              <CarouselTitle title={'Featured Experiences'} />
              <Carousel>
                {experienceLoading ? (
                  <>
                    <DummyCardWrapper>
                      <DummyCardImg></DummyCardImg>
                      <DummyCardContent></DummyCardContent>
                      <DummyCardContent></DummyCardContent>
                    </DummyCardWrapper>
                    <DummyCardWrapper>
                      <DummyCardImg></DummyCardImg>
                      <DummyCardContent></DummyCardContent>
                      <DummyCardContent></DummyCardContent>
                    </DummyCardWrapper>
                    <DummyCardWrapper>
                      <DummyCardImg></DummyCardImg>
                      <DummyCardContent></DummyCardContent>
                      <DummyCardContent></DummyCardContent>
                    </DummyCardWrapper>
                  </>
                ) : (
                  experiences.map((experience, key) => (
                    <Card key={key} content={experience} />
                  ))
                )}
              </Carousel>
              <CarouselTitle title={'Find your inspiration'} />
              <Carousel>
                {inspirations.length > 0
                  ? inspirations.map((inspiration, key) => (
                      <SimpleCard item={inspiration} key={key} />
                    ))
                  : null}
              </Carousel>
              <CarouselTitle title={'Discover the night'} />
              <Carousel>
                {popularExperienceLoading ? (
                  <>
                    <DummyCardWrapper>
                      <DummyCardImg></DummyCardImg>
                      <DummyCardContent></DummyCardContent>
                      <DummyCardContent></DummyCardContent>
                    </DummyCardWrapper>
                    <DummyCardWrapper>
                      <DummyCardImg></DummyCardImg>
                      <DummyCardContent></DummyCardContent>
                      <DummyCardContent></DummyCardContent>
                    </DummyCardWrapper>
                    <DummyCardWrapper>
                      <DummyCardImg></DummyCardImg>
                      <DummyCardContent></DummyCardContent>
                      <DummyCardContent></DummyCardContent>
                    </DummyCardWrapper>
                  </>
                ) : (
                  popularExperiences.map((experience, key) => (
                    <Card key={key} content={experience} />
                  ))
                )}
              </Carousel>
            </CarouselSection>
          </Route>
          <Route path={`${path}/*`}>
            <NotFound />
          </Route>
        </Switch>
      </Main>
      <Footer lang={lang} />
    </>
  );
}

export default Home;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchExperiences } from '../redux/experiences/experienceActions';
import Rating from './Rating'
import { CardCancellation, CardCategoryLabel, CardDescription, CardDurationValue, CardIcon, CardImg, CardLanguage, CardSectionBody, CardSectionFooter, CardSectionHeader, CardStarWrapper, CardTitle, CardWrapper, CardPriceWrapper, CardSpanPrice, CardDivRowFooter, CardDivRowDescription } from './StylesCard';
import { replaceLang, parseISODuration, setPriceFormat } from '../utilities'
import { ReactComponent as FreeCancellation } from '../assets/images/freeCancellation.svg'
import { ReactComponent as Language } from '../assets/images/languages.svg'
import { ReactComponent as Duration } from '../assets/images/duration.svg'


const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperiences());
  }, []);

  const dataState = useSelector((state) => state.experiences);
  const { experiences } = dataState;

  return (
    <>
      {experiences?.map((experience) => (
        <>
          <CardWrapper key={experience.city.id}>
            <CardImg src={experience.cover_image_url} alt='image'></CardImg>
            <CardSectionHeader>
              <CardCategoryLabel>{`${experience.ticket
                ? 'tickets and events'
                : 'attraction & guide tour'
                } `}</CardCategoryLabel>
              <CardTitle>{experience.title}</CardTitle>
              <CardDescription>
                {experience.description}
              </CardDescription>
            </CardSectionHeader>
            <CardSectionBody>
              <CardCancellation cancellation={experience.free_cancellation}>
                <CardIcon><FreeCancellation /></CardIcon>
                Free cancellation
              </CardCancellation>
              <CardDurationValue>
                <CardIcon freeCanc={experience.free_cancellation}><Language /></CardIcon>
                {parseISODuration(experience.duration)}
              </CardDurationValue>
              <CardDivRowDescription>
                <CardIcon freeCanc={experience.free_cancellation}><Duration /></CardIcon>
                Available in:
                <CardLanguage>
                  {replaceLang(experience.languages)}
                </CardLanguage>
              </CardDivRowDescription>
            </CardSectionBody>
            <CardSectionFooter>
              <CardDivRowFooter>
                <CardStarWrapper>
                  <Rating value={experience.reviews_avg} numReviews={experience.reviews_number}></Rating>
                </CardStarWrapper>
              </CardDivRowFooter>
              <CardPriceWrapper>
                <CardSpanPrice>from:</CardSpanPrice>
                {setPriceFormat(experience.original_retail_price.formatted_iso_value)}
              </CardPriceWrapper>
            </CardSectionFooter>
          </CardWrapper>
        </>
      ))}
    </>
  );
};

export default Card;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { fetchExperiences } from '../redux/experiences/experienceActions';
import Rating from './Rating'
import { CardCancellation, CardCategoryLabel, CardDescription, CardDurationValue, IconBodyCard, CardImg, CardLanguage, CardSectionBody, CardSectionFooter, CardSectionHeader, CardStarWrapper, CardTitle, CardWrapper, CardPriceWrapper, CardSpanPrice, CardDivRowFooter, CardDivRowDescription } from './StylesCard';
import { replaceLang, parseISODuration, setPriceFormat } from '../utilities'
import { ReactComponent as FreeCancellationIcon } from '../assets/images/freeCancellation.svg'
import { ReactComponent as LanguageIcon } from '../assets/images/languages.svg'
import { ReactComponent as DurationIcon } from '../assets/images/duration.svg'


const Card = ({ fetch }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
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
                <IconBodyCard><FreeCancellationIcon /></IconBodyCard>
                Free cancellation
              </CardCancellation>
              <CardDurationValue>
                <IconBodyCard><DurationIcon /></IconBodyCard>
                {parseISODuration(experience.duration)}      {/* experience.duration */}
              </CardDurationValue>
              <CardDivRowDescription>
                <IconBodyCard><LanguageIcon /></IconBodyCard>
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

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchExperiences } from '../redux/experiences/experienceActions';
import Rating from './Rating'
import { CardCancellation, CardCategoryLabel, CardDescription, CardDurationValue, CardIcon, CardImg, CardLanguage, CardSectionBody, CardSectionFooter, CardSectionHeader, CardStarWrapper, CardTitle, CardWrapper, CardPriceWrapper, DivRow, CardValueFooter, CardSpanPrice } from './StylesCard';
import { replaceLang, parseISODuration } from '../utilities'


const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperiences());
  }, []);

  const dataState = useSelector((state) => state.experiences);
  const { experiences } = dataState;

  // DELETE ALL
  const mapp = experiences.map((data) => data);
  console.log(mapp);
  // DELETE ALL

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
                <CardIcon></CardIcon>
                Free cancellation
              </CardCancellation>
              <CardDurationValue>
                <CardIcon></CardIcon>
                {parseISODuration(experience.duration)}
              </CardDurationValue>
              <DivRow>
                <CardIcon></CardIcon>
                Available in:
                <CardLanguage>
                  {replaceLang(experience.languages)}
                </CardLanguage>
              </DivRow>
            </CardSectionBody>
            <CardSectionFooter>
              <DivRow>
                <CardStarWrapper>
                  <Rating value={experience.reviews_avg} numReviews={experience.reviews_number}></Rating>
                </CardStarWrapper>
              </DivRow>
              <CardPriceWrapper>
                <CardSpanPrice>from:</CardSpanPrice>
                <CardValueFooter>
                  {experience.original_retail_price.formatted_iso_value}
                </CardValueFooter>
              </CardPriceWrapper>
            </CardSectionFooter>
          </CardWrapper>
        </>
      ))}
    </>
  );
};

export default Card;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchExperiences } from '../redux/experiences/experienceActions';
import Rating from './Rating'
import { CardCancellation, CardCategoryLabel, CardDescription, CardDurationValue, CardIcon, CardImg, CardLanguage, CardSectionBody, CardSectionFooter, CardSectionHeader, CardStarWrapper, CardTitle, CardWrapper, CardPriceWrapper, DivRow, CardValueFooter, CardSpanPrice } from './StylesCard';
import { replaceLang } from '../utilities'


const parseISODuration = (iso8601Duration) => {
  const iso8601DurationRegex = /(-)?PT(?:([.,\d]+)D)?(?:([.,\d]+)H)?(?:([.,\d]+)M)?/;

  let matches = iso8601Duration.match(iso8601DurationRegex);

  return {
    days: matches[2] === undefined ? '' : `${matches[2]} days `,
    hours: matches[3] === undefined ? '' : `${matches[3]} hours `,
    minutes: matches[4] === undefined ? '' : `${matches[4]} mins `,
  };
}

console.log(parseISODuration('PT3H'))

// START CARD

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
                {Object.values(parseISODuration(experience.duration).toString().split(','))}
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

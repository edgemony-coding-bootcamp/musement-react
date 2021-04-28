import Rating from './Rating';
import {
  CardCancellation,
  CardCategoryLabel,
  CardDescription,
  CardDurationValue,
  IconBodyCard,
  CardImg,
  CardLanguage,
  CardSectionBody,
  CardSectionFooter,
  CardSectionHeader,
  CardStarWrapper,
  CardTitle,
  CardWrapper,
  CardPriceWrapper,
  CardSpanPrice,
  CardDivRowFooter,
  CardDivRowDescription,
  CardContentWrapper,
} from '../styles';
import { replaceLang, parseISODuration, setPriceFormat } from '../utilities';
import { ReactComponent as FreeCancellationIcon } from '../assets/img/freeCancellation.svg';
import { ReactComponent as LanguageIcon } from '../assets/img/languages.svg';
import { ReactComponent as DurationIcon } from '../assets/img/duration.svg';
import { useSelector } from 'react-redux';

const Card = ({ content }) => {
  const { translatedTexts } = useSelector((state) => state.translations);
  return (
    <>
      {content ? (
        <CardWrapper>
          <CardImg src={content.cover_image_url} alt='image'></CardImg>
          <CardContentWrapper>
            <CardSectionHeader>
              <CardCategoryLabel>{`${
                content.ticket
                  ? `${translatedTexts.ticketandevents}`
                  : `${translatedTexts.attractionandguidetour}`
              } `}</CardCategoryLabel>
              <CardTitle>{content.title}</CardTitle>
              <CardDescription>{content.description}</CardDescription>
            </CardSectionHeader>
            <CardSectionBody>
              <CardCancellation cancellation={content.free_cancellation}>
                <IconBodyCard>
                  <FreeCancellationIcon />
                </IconBodyCard>
                {translatedTexts.freecancellation}
              </CardCancellation>
              <CardDurationValue>
                <IconBodyCard>
                  <DurationIcon />
                </IconBodyCard>
                {parseISODuration(content.duration)}
              </CardDurationValue>
              {content.languages.length > 0 && (
                <CardDivRowDescription>
                  <IconBodyCard>
                    <LanguageIcon />
                  </IconBodyCard>
                  {translatedTexts.availablein}
                  <CardLanguage>{replaceLang(content.languages)}</CardLanguage>
                </CardDivRowDescription>
              )}
            </CardSectionBody>
            <CardSectionFooter>
              <CardDivRowFooter>
                <CardStarWrapper>
                  <Rating
                    value={content.reviews_avg}
                    // eslint-disable-next-line prettier/prettier
                    numReviews={content.reviews_number}></Rating>
                </CardStarWrapper>
              </CardDivRowFooter>
              <CardPriceWrapper>
                <CardSpanPrice>{translatedTexts.from}</CardSpanPrice>
                {setPriceFormat(content.original_retail_price.formatted_value)}
              </CardPriceWrapper>
            </CardSectionFooter>
          </CardContentWrapper>
        </CardWrapper>
      ) : null}
    </>
  );
};

export default Card;

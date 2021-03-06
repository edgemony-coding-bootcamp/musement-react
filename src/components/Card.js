import Rating from './Rating';
import {
  CardCancellation,
  CardCategoryLabel,
  CardDescription,
  CardDurationValue,
  IconDiv,
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
  LinkPages,
} from '../styles';
import { replaceLang, parseISODuration, setPriceFormat } from '../utilities';
import { ReactComponent as FreeCancellationIcon } from '../assets/img/freeCancellation.svg';
import { ReactComponent as LanguageIcon } from '../assets/img/languages.svg';
import { ReactComponent as DurationIcon } from '../assets/img/duration.svg';

import { useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';

const Card = ({ content, popular }) => {
  let { path } = useRouteMatch();
  const { translatedTexts } = useSelector((state) => state.translations);

  return (
    <LinkPages
      to={
        popular
          ? `activities/${content.uuid}`
          : `${path}/activities/${content.uuid}`
        // eslint-disable-next-line prettier/prettier
      }>
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
              <IconDiv>
                <FreeCancellationIcon />
              </IconDiv>
              {translatedTexts.freecancellation}
            </CardCancellation>
            <CardDurationValue>
              <IconDiv>
                <DurationIcon />
              </IconDiv>
              {parseISODuration(content.duration)}
            </CardDurationValue>
            {content.languages.length > 0 && (
              <CardDivRowDescription>
                <IconDiv>
                  <LanguageIcon />
                </IconDiv>
                {translatedTexts.availablein}
                <CardLanguage>{replaceLang(content.languages)}</CardLanguage>
              </CardDivRowDescription>
            )}
          </CardSectionBody>
          <CardSectionFooter>
            <CardDivRowFooter>
              <CardStarWrapper avg={content.reviews_avg}>
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
    </LinkPages>
  );
};

export default Card;

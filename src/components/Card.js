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
} from '../styles';
import { replaceLang, parseISODuration, setPriceFormat } from '../utilities';
import { ReactComponent as FreeCancellationIcon } from '../assets/img/freeCancellation.svg';
import { ReactComponent as LanguageIcon } from '../assets/img/languages.svg';
import { ReactComponent as DurationIcon } from '../assets/img/duration.svg';

const Card = ({ content }) => {
  return (
    <>
      {content ? (
        <CardWrapper>
          <CardImg src={content.cover_image_url} alt='image'></CardImg>
          <CardSectionHeader>
            <CardCategoryLabel>{`${
              content.ticket ? 'tickets and events' : 'attraction & guide tour'
            } `}</CardCategoryLabel>
            <CardTitle>{content.title}</CardTitle>
            <CardDescription>{content.description}</CardDescription>
          </CardSectionHeader>
          <CardSectionBody>
            <CardCancellation cancellation={content.free_cancellation}>
              <IconBodyCard>
                <FreeCancellationIcon />
              </IconBodyCard>
              Free cancellation
            </CardCancellation>
            <CardDurationValue>
              <IconBodyCard>
                <DurationIcon />
              </IconBodyCard>
              {parseISODuration(content.duration)}
            </CardDurationValue>
            <CardDivRowDescription>
              <IconBodyCard>
                <LanguageIcon />
              </IconBodyCard>
              Available in:
              <CardLanguage>{replaceLang(content.languages)}</CardLanguage>
            </CardDivRowDescription>
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
              <CardSpanPrice>from:</CardSpanPrice>
              {setPriceFormat(content.original_retail_price.formatted_value)}
            </CardPriceWrapper>
          </CardSectionFooter>
        </CardWrapper>
      ) : null}
    </>
  );
};

export default Card;

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
} from './StylesCard';
import { replaceLang, parseISODuration, setPriceFormat } from '../utilities';
import { ReactComponent as FreeCancellationIcon } from '../assets/images/freeCancellation.svg';
import { ReactComponent as LanguageIcon } from '../assets/images/languages.svg';
import { ReactComponent as DurationIcon } from '../assets/images/duration.svg';

const Card = ({ items }) => {
  return (
    <>
      {items?.map((item) => (
        <>
          <CardWrapper key={item.city.id}>
            <CardImg src={item.cover_image_url} alt='image'></CardImg>
            <CardSectionHeader>
              <CardCategoryLabel>{`${
                item.ticket ? 'tickets and events' : 'attraction & guide tour'
              } `}</CardCategoryLabel>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardSectionHeader>
            <CardSectionBody>
              <CardCancellation cancellation={item.free_cancellation}>
                <IconBodyCard>
                  <FreeCancellationIcon />
                </IconBodyCard>
                Free cancellation
              </CardCancellation>
              <CardDurationValue>
                <IconBodyCard>
                  <DurationIcon />
                </IconBodyCard>
                {parseISODuration(item.duration)}
              </CardDurationValue>
              <CardDivRowDescription>
                <IconBodyCard>
                  <LanguageIcon />
                </IconBodyCard>
                Available in:
                <CardLanguage>{replaceLang(item.languages)}</CardLanguage>
              </CardDivRowDescription>
            </CardSectionBody>
            <CardSectionFooter>
              <CardDivRowFooter>
                <CardStarWrapper>
                  <Rating
                    value={item.reviews_avg}
                    numReviews={item.reviews_number}
                  ></Rating>
                </CardStarWrapper>
              </CardDivRowFooter>
              <CardPriceWrapper>
                <CardSpanPrice>from:</CardSpanPrice>
                {setPriceFormat(item.original_retail_price.formatted_iso_value)}
              </CardPriceWrapper>
            </CardSectionFooter>
          </CardWrapper>
        </>
      ))}
    </>
  );
};

export default Card;

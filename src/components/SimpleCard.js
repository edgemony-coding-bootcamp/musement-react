import {
  SimpleCardDescript,
  SimpleCardExperiences,
  SimpleCardImg,
  SimpleCardTitleBottom,
  SimpleCardTitleTop,
  SimpleCardTitleWrapper,
  SimpleCardWrapper,
} from '../styles';

export const SimpleCard = ({ item }) => {
  console.log(item);
  return (
    <SimpleCardWrapper>
      <SimpleCardImg src={item.cover_image_url}></SimpleCardImg>
      <SimpleCardDescript>
        <SimpleCardTitleWrapper>
          <SimpleCardTitleTop>
            <SimpleCardTitleBottom>{item.subtitle}</SimpleCardTitleBottom>
          </SimpleCardTitleTop>
        </SimpleCardTitleWrapper>
        <SimpleCardExperiences>
          {item.items_count.musement} experiences
        </SimpleCardExperiences>
      </SimpleCardDescript>
    </SimpleCardWrapper>
  );
};

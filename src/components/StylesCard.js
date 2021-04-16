import styled from 'styled-components';


const size = { tablet: '760px', desktop: '1024px' };
const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const CardWrapper = styled.div`
  max-width: 290px;
  max-height: 365px;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px -8px;
  cursor: grab;
  
  &:hover{
    transform: translate(0px, -5px) scale(1.025);
    transition-duration: 450ms;
    box-shadow: 0 3px 10px -4px;
  }

  @media ${device.tablet} {
    max-width: 310px;
    max-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media ${device.desktop} {
    max-width: 335px;
    max-height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 155px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

export const CardSectionHeader = styled.section`
  margin: 0 10px;
  margin-top: 3px;
  display: flex;
  text-align: left;
  flex-direction: column;
`;

export const CardSectionBody = styled.section`
  margin: 0 10px;
  margin-top: 3px;
  display: flex;
  text-align: left;
  flex-direction: column;
`;

export const CardSectionFooter = styled.section`
  margin: 0 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bcd8eb;
`;

export const CardCategoryLabel = styled.span`
  width: fit-content;
  padding: 1px 7px;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.75rem;
  color: white;
  background-color: orange;
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-top: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

export const CardDescription = styled.p`
  margin-top: 5px;
  font-size: 0.75rem;
  text-align: start;
  display: -webkit-box;
  line-height: 1.7;
  -webkit-line-clamp: 2;
  min-height: 30px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ desktop }) => (desktop < 1023 ? `display: initial;` : `display: none;`)}
`;

export const CardIcon = styled.div`
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  background-color: yellow;
`;

export const CardCancellation = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #72ca74;

  ${({ cancellation }) => (cancellation ? `opacity: 1px;` : `display: none;`)}
`;

export const Div = styled.div`
  font-size: 0.75rem;
`;


export const CardPriceWrapper = styled.div`
  font-size: 0.75rem;
  text-align: right;
`;

export const DivRow = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardLanguage = styled.p`
  width: fit-content;
  height: fit-content;
  margin: 0;
  text-transform: capitalize;
  font-size: 0.75rem;
  color: black;
`;

export const CardDurationValue = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Span = styled.span`
  width: fit-content;
  display: inline-block;
`;

export const CardSpanPrice = styled(Span)`
  width: fit-content;
  text-align: right;
  display: inline-block;
`;


export const CardSpanRating = styled(Span)`
  width: fit-content;
  margin-left: 4px;
  display: inline-block;
  color: black;
`;

export const CardStarWrapper = styled.div`
  width: fit-content;
  height: 40px;
  margin-right: 4px;
  padding: 0;
  display: flex;
  align-items: center;
  margin-left: auto;
  color: #ffb743;
`;

export const CardValueFooter = styled.div`
  color: #fb3640;
  font-size: 0.95rem;
`;
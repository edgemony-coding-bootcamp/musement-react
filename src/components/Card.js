import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { fetchExperiences } from '../redux/experiences/experienceActions';

const size = { tablet: '760px', desktop: '1024px' };
const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

const CardWrapper = styled.div`
  max-width: 290px;
  max-height: 365px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  box-sizing: border-box;
  border: 1px solid red;

  @media ${device.tablet} {
    max-width: 310px;
    max-height: 380px;
  }

  @media ${device.desktop} {
    max-width: 335px;
    max-height: 430px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 155px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

const CardSectionColumn = styled.section`
  margin: 10px;
  margin-top: 3px;
  display: flex;
  text-align: left;
  flex-direction: column;
`;

const CardSectionRow = styled.section`
  margin: 10px;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardCategoryLabel = styled.span`
  width: fit-content;
  padding: 1px 7px;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.75rem;
  color: white;
  background-color: orange;
`;

const CardTitle = styled.h3`
  margin: 0;
  margin-top: 10px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const CardDescription = styled.p`
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
`;

const CardIcon = styled.div`
  width: 22px;
  height: 22px;
  display: inline-block;
  background-color: yellow;
`;

const CardDivCancellation = styled.div`
  width: 119px;
  height: fit-content;
  font-size: 0.75rem;

  ${({ cancellation }) => (cancellation ? `opacity: 1px;` : `display: none;`)}
`;

const Div = styled.div`
  font-size: 0.75rem;
`;

const DivRow = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Span = styled.div`
  width: fit-content;
  display: inline-block;
`;

const CardStar = styled.p`
  color: yellow;
`;

const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  const dataState = useSelector((state) => state.experiences);
  const { experiences } = dataState;

  return (
    <>
      <CardWrapper>
        {experiences &&
          experiences.map((experience) => (
            <>
              <CardImg src={experience.cover_image_url} alt='image'></CardImg>
              <CardSectionColumn>
                <CardCategoryLabel>{`attraction & guide tour`}</CardCategoryLabel>
                <CardTitle>{experience.title}</CardTitle>
                <CardDescription>{experience.description}</CardDescription>
              </CardSectionColumn>
              <CardSectionColumn>
                <CardDivCancellation
                  cancellation={experience.free_cancellation}>
                  <CardIcon></CardIcon>
                  free cancellations
                </CardDivCancellation>
                <DivRow>
                  <CardIcon></CardIcon>
                  flexible
                </DivRow>
                <DivRow>
                  <CardIcon></CardIcon>
                  available in: en, it, de
                  {experience.languages.code}
                </DivRow>
              </CardSectionColumn>
              <CardSectionRow>
                <Div>
                  <CardStar>star{experience.reviews_avg}</CardStar>
                  <Span>({experience.reviews_number})</Span>
                </Div>
                <Div>
                  <Span>from:</Span>
                  <Div>
                    {experience.original_retail_price.formatted_iso_value}
                  </Div>
                </Div>
              </CardSectionRow>
            </>
          ))}
      </CardWrapper>
    </>
  );
};

export default Card;

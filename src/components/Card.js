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

const Img = styled.img`
  width: 100%;
  height: 155px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

const SectionColumn = styled.section`
  margin: 10px;
  margin-top: 3px;
  display: flex;
  text-align: left;
  flex-direction: column;
  border: 1px solid blue;
`;

const SectionRow = styled.section`
  margin: 10px;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid blue;
`;

const CategoryLabel = styled.span`
  width: fit-content;
  padding: 1px 7px;
  text-align: center;
  font-size: 0.75rem;
  color: white;
  background-color: orange;
`;

const Title = styled.h3`
  margin: 0;
  margin-top: 10px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Description = styled.p`
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

const Icon = styled.div`
  width: 22px;
  height: 22px;
  display: inline-block;
  background-color: yellow;
`;

const Div = styled.div`
  width: 119px;
  height: fit-content;
  font-size: 0.75rem;
  border: 1px solid green;
`;

const DivRow = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid purple;
`;

const Span = styled.div`
  width: fit-content;
  display: inline-block;
  border: 1px solid brown;
`;

const Card = () => {
  return (
    <>
      <CardWrapper>
        <Img></Img>
        <SectionColumn>
          <CategoryLabel>{`ATTRACTION & GUIDE TOUR`}</CategoryLabel>
          <Title>title</Title>
          <Description>description</Description>
        </SectionColumn>
        <SectionColumn>
          <DivRow>
            <Icon></Icon>
            Free cancellations
          </DivRow>
          <DivRow>
            <Icon></Icon>
            Flexible
          </DivRow>
          <DivRow>
            <Icon></Icon>
            Available in: en, it, de
          </DivRow>
        </SectionColumn>
        <SectionRow>
          <Div>
            <Span>star</Span>
            <Span>(XXX)</Span>
          </Div>
          <Div>
            <Span>from:</Span>
            <Div>€XXX</Div>
          </Div>
        </SectionRow>
      </CardWrapper>
    </>
  );
};

export default Card;

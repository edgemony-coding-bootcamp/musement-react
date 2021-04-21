import styled from 'styled-components';

const SimpleCardWrapper = styled.div`
  width: 290px;
  height: 245px;
  position: relative;
  background-color: grey;

  @media (min-width: 1350px) {
    width: 335px;
  }
`;

export const SimpleCardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SimpleCardDescript = styled.div`
  max-width: 217px;
  height: fit-content;
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1350px) {
    width: 250px;
  }
`;

const SimpleCardTitleWrapper = styled.div`
  margin: auto;
  padding: 2px 0;
  line-height: 1.3;
  border-left: 12px solid red;
`;

const SimpleCardTitleTop = styled.span`
  margin: 0;
  padding: 4px 0;
  display: inline;
  color: #fff;
  background-color: red;
`;

const SimpleCardTitleBottom = styled.span`
  position: relative;
  left: -6px;
`;

const SimpleCardExperiences = styled.div`
  width: fit-content;
  padding: 4px 5px;
  font-size: 0.85rem;
  vertical-align: middle;
  background-color: white;
`;

export const SimpleCard = ({ items }) => {
  return (
    <>
      <SimpleCardWrapper>
        <SimpleCardImg src='https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg'></SimpleCardImg>
        <SimpleCardDescript>
          <SimpleCardTitleWrapper>
            <SimpleCardTitleTop>
              <SimpleCardTitleBottom>
                TITLdgsgkhbsghbs gfsbbsdlgbsd sbd gilbsdisg ifb sgbE
              </SimpleCardTitleBottom>
            </SimpleCardTitleTop>
          </SimpleCardTitleWrapper>
          <SimpleCardExperiences>DESCRIPTION</SimpleCardExperiences>
        </SimpleCardDescript>
      </SimpleCardWrapper>
    </>
  );
};

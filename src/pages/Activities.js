import React /* { useEffect } */ from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
// import { getActivityById } from '../redux/activities/activityActions';
import {
  SectionWrapper,
  Jumbotron,
  BackdropImage,
  OpenMediaButton,
  ContentSection,
  ContentSectionContainer,
  ContentSectionBody,
  CardCategoryLabel,
  FeaturesDiv,
  ContentUrl,
  ContentSectionHeader,
  ContentTitle,
  ContentFeaturesSection,
  ContentDescription,
  ContentAbout,
} from '../styles';
import { parseISODuration } from '../utilities';
import { data } from './data';

function Activities() {
  // let { id } = useParams();
  // const dispatch = useDispatch();
  // const { activity, loading } = useSelector((state) => state.activity);
  // useEffect(() => {
  //   dispatch(getActivityById(id));
  // }, [dispatch]);
  return (
    <>
      <SectionWrapper>
        <Jumbotron>
          <BackdropImage src={data.city['cover_image_url']} />
          <OpenMediaButton>Open Media</OpenMediaButton>
        </Jumbotron>

        <ContentSectionContainer>
          <ContentSectionHeader>
            <CardCategoryLabel>
              {data.ticket
                ? 'Biglietti ed Eventi'
                : 'Attrazioni e tour guidati'}
            </CardCategoryLabel>
            <ContentTitle>{data.title}</ContentTitle>
            <ContentUrl>{` Home > ${data.city['name']} > ${data.title}`}</ContentUrl>
          </ContentSectionHeader>
          <ContentFeaturesSection>
            <FeaturesDiv>
              {data.free_cancellation ? 'Cancellazione Gratuita' : null}
            </FeaturesDiv>
            <FeaturesDiv>
              Languages: {data.languages.map((item) => item.name)}
            </FeaturesDiv>
            <FeaturesDiv>{data.operational_days}</FeaturesDiv>
            <FeaturesDiv>{parseISODuration(data.validity)}</FeaturesDiv>
            <FeaturesDiv>
              {data.voucher_access_usage ? 'Mobile voucher accepted' : null}
            </FeaturesDiv>
            <FeaturesDiv>{'Safety measures applied'}</FeaturesDiv>
            <FeaturesDiv>
              <span>{data.features[0].name}</span>
              <span>{data.features[1].name}</span>
            </FeaturesDiv>
          </ContentFeaturesSection>
          <ContentSectionBody>
            <ContentDescription>{data.description}</ContentDescription>
            <ContentAbout>{data.about}</ContentAbout>
          </ContentSectionBody>
        </ContentSectionContainer>
      </SectionWrapper>
    </>
  );
}

export default Activities;

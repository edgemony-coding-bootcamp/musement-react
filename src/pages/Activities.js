import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getActivityById } from '../redux/activities/activityActions';
import {
  SectionWrapper,
  Jumbotron,
  BackdropImage,
  OpenMediaButton,
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

function Activities() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { activity, loading, error } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getActivityById(id));
  }, []);
  let activityKeys = Object.keys(activity);
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        activityKeys.length > 0 && (
          <SectionWrapper>
            <Jumbotron>
              <BackdropImage src={activity?.city['cover_image_url']} />
              <OpenMediaButton>Open Media</OpenMediaButton>
            </Jumbotron>
            <ContentSectionContainer>
              <ContentSectionHeader>
                <CardCategoryLabel>
                  {activity?.ticket
                    ? 'Biglietti ed Eventi'
                    : 'Attrazioni e tour guidati'}
                </CardCategoryLabel>
                <ContentTitle>{activity?.title}</ContentTitle>
                <ContentUrl>{` Home > ${activity?.city['name']} > ${activity?.title}`}</ContentUrl>
              </ContentSectionHeader>
              <ContentFeaturesSection>
                <FeaturesDiv>
                  {activity?.free_cancellation
                    ? 'Cancellazione Gratuita'
                    : null}
                </FeaturesDiv>
                <FeaturesDiv>
                  Languages: {activity?.languages.map((item) => item.name)}
                </FeaturesDiv>
                <FeaturesDiv>{activity?.operational_days}</FeaturesDiv>
                <FeaturesDiv>
                  {parseISODuration(activity?.validity)}
                </FeaturesDiv>
                <FeaturesDiv>
                  {activity?.voucher_access_usage === 'MOBILE'
                    ? 'Mobile voucher accepted'
                    : null}
                </FeaturesDiv>
                <FeaturesDiv>{'Safety measures applied'}</FeaturesDiv>
                <FeaturesDiv>
                  <span>{activity?.features[0]?.name}</span>
                  <span>{activity?.features[1]?.name}</span>
                </FeaturesDiv>
              </ContentFeaturesSection>
              <ContentSectionBody>
                <ContentDescription>{activity?.description}</ContentDescription>
                <ContentAbout>{activity?.about}</ContentAbout>
              </ContentSectionBody>
            </ContentSectionContainer>
          </SectionWrapper>
        )
      )}
    </div>
  );
}

export default Activities;

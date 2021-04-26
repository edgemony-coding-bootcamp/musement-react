import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MediaSlideshow from '../components/MediaSlideshow';
import {
  getActivityById,
  getMediaById,
} from '../redux/activities/activityActions';
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
  LanguageActivityIcon,
  FreeCancellationIcon,
  P,
  CalendarIcon,
  MobileVoucherIcon,
  DurationActivityIcon,
  SafetyActivityIcon,
  IstantActivityIcon,
  SkipActivityIcon,
  IconDiv,
} from '../styles';
import { parseISODuration } from '../utilities';

function Activities() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let { id } = useParams();
  const dispatch = useDispatch();
  const { activity, loading, error } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getActivityById(id));

    dispatch(getMediaById(id));
  }, []);
  let activityKeys = Object.keys(activity);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        activityKeys.length > 0 && (
          <SectionWrapper>
            {modalIsOpen && <MediaSlideshow onClose={closeModal} id={id} />}
            <Jumbotron>
              <BackdropImage src={activity?.city['cover_image_url']} />
              <OpenMediaButton onClick={() => setModalIsOpen(true)}>
                Open Media
              </OpenMediaButton>
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
                <FeaturesDiv freeCancellation={true}>
                  <IconDiv md>
                    <FreeCancellationIcon />
                  </IconDiv>
                  {activity?.free_cancellation
                    ? 'Cancellazione gratuita'
                    : null}
                </FeaturesDiv>
                <FeaturesDiv>
                  <IconDiv md>
                    {' '}
                    <LanguageActivityIcon />
                  </IconDiv>
                  <P bold={true}>Languages:</P>
                  {activity?.languages.map((item) => item.name).join(', ')}
                </FeaturesDiv>
                <FeaturesDiv>
                  <IconDiv md>
                    {' '}
                    <CalendarIcon />
                  </IconDiv>
                  <P bold={true}>Availability:</P>
                  {activity?.operational_days}
                </FeaturesDiv>
                <FeaturesDiv>
                  <IconDiv md>
                    {' '}
                    <DurationActivityIcon />
                  </IconDiv>
                  {parseISODuration(activity?.validity)}
                </FeaturesDiv>
                <FeaturesDiv>
                  <IconDiv md>
                    {' '}
                    <MobileVoucherIcon />
                  </IconDiv>
                  {activity?.voucher_access_usage === 'MOBILE'
                    ? 'Mobile voucher accepted'
                    : null}
                </FeaturesDiv>
                <FeaturesDiv>
                  <IconDiv md>
                    {' '}
                    <SafetyActivityIcon />
                  </IconDiv>
                  {'Safety measures applied'}
                </FeaturesDiv>
                <FeaturesDiv>
                  <IconDiv lg>
                    <IstantActivityIcon />
                  </IconDiv>
                  <span>{activity?.features[0]?.name}</span>
                  <IconDiv lg>
                    <SkipActivityIcon />
                  </IconDiv>
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

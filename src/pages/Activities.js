import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import MediaSlideshow from '../components/MediaSlideshow';
import MobileMediaSlideshow from '../components/MobileMediaSlideshow';
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
  GrayFeaturesDiv,
  AllPicturesIcon,
  ContentHighlights,
  ContentHighlightsList,
  ContentHighlightsElements,
  device,
  useMediaQuery,
} from '../styles';
import { parseISODuration } from '../utilities';

function Activities() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let { id } = useParams();
  const dispatch = useDispatch();
  const { activity, loading, error } = useSelector((state) => state.activity);
  const { media } = useSelector((state) => state.activity);
  const { translatedTexts } = useSelector((state) => state.translations);
  const { userLang } = useSelector((state) => state.languages);
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  useEffect(() => {
    dispatch(getActivityById(id));
    dispatch(getMediaById(id));
  }, [dispatch, id, userLang]);
  let activityKeys = Object.keys(activity);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  let isTablet = useMediaQuery(`${device.tablet}`);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>error</div>
      ) : (
        activityKeys.length > 0 && (
          <SectionWrapper>
            {modalIsOpen && <MediaSlideshow onClose={closeModal} id={id} />}
            <Jumbotron>
              {isTablet ? (
                <>
                  <BackdropImage src={activity?.city['cover_image_url']} />
                  {media.length > 0 && (
                    <OpenMediaButton onClick={() => setModalIsOpen(true)}>
                      <AllPicturesIcon />
                      <P>{`${translatedTexts.openMediaBtn}`}</P>
                    </OpenMediaButton>
                  )}
                </>
              ) : (
                media.length > 0 && <MobileMediaSlideshow />
              )}
            </Jumbotron>
            <ContentSectionContainer>
              <ContentSectionHeader>
                <CardCategoryLabel>
                  {activity?.ticket
                    ? `${translatedTexts.ticketandevents}`
                    : `${translatedTexts.attractionandguidetour}`}
                </CardCategoryLabel>
                <ContentTitle>{activity?.title}</ContentTitle>
                {isTablet && (
                  <ContentUrl>{` Home > ${activity?.city['name']} > ${activity?.title}`}</ContentUrl>
                )}
              </ContentSectionHeader>
              <ContentFeaturesSection>
                {activity?.free_cancellation && (
                  <FeaturesDiv freeCancellation={true}>
                    <IconDiv md>
                      <FreeCancellationIcon />
                    </IconDiv>
                    {activity?.free_cancellation
                      ? `${translatedTexts.freecancellation}`
                      : null}
                  </FeaturesDiv>
                )}
                {activity?.languages.length > 0 && (
                  <FeaturesDiv>
                    <IconDiv md>
                      <LanguageActivityIcon />
                    </IconDiv>
                    <P bold={true}>{`${translatedTexts.languages}`}</P>
                    {activity?.languages.map((item) => item.name).join(', ')}
                  </FeaturesDiv>
                )}
                {activity?.operational_days && (
                  <FeaturesDiv>
                    <IconDiv md>
                      <CalendarIcon />
                    </IconDiv>
                    <P bold={true}>{`${translatedTexts.availability}`}</P>
                    {activity?.operational_days}
                  </FeaturesDiv>
                )}
                {activity?.validity && (
                  <FeaturesDiv>
                    <IconDiv md>
                      <DurationActivityIcon />
                    </IconDiv>
                    {parseISODuration(activity?.validity)}
                  </FeaturesDiv>
                )}
                {activity?.voucher_access_usage === 'MOBILE' && (
                  <FeaturesDiv>
                    <IconDiv md>
                      <MobileVoucherIcon />
                    </IconDiv>
                    {`${translatedTexts.mobilevoucher}`}
                  </FeaturesDiv>
                )}
                <FeaturesDiv>
                  <IconDiv md>
                    <SafetyActivityIcon />
                  </IconDiv>
                  {`${translatedTexts.safetymeasuresapplied}`}
                </FeaturesDiv>
                <GrayFeaturesDiv>
                  <IconDiv lg>
                    <IstantActivityIcon />
                  </IconDiv>
                  <span>{activity?.features[0]?.name}</span>
                  <IconDiv lg>
                    <SkipActivityIcon />
                  </IconDiv>
                  <span>{activity?.features[1]?.name}</span>
                </GrayFeaturesDiv>
              </ContentFeaturesSection>
              <ContentSectionBody>
                <ContentHighlights>{`${translatedTexts.highlitsheader}`}</ContentHighlights>
                <ContentHighlightsList>
                  {activity?.highlights.map((item, index) => (
                    <ContentHighlightsElements key={index}>
                      {item}
                    </ContentHighlightsElements>
                  ))}
                </ContentHighlightsList>

                <ContentDescription>{activity?.description}</ContentDescription>
                <ContentAbout>{activity?.about}</ContentAbout>
              </ContentSectionBody>
            </ContentSectionContainer>
          </SectionWrapper>
        )
      )}
    </>
  );
}

export default Activities;

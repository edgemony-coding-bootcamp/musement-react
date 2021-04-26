import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  GalleryCarousel,
  GalleryCloseBtn,
  JumbotronGallery,
  MediaArrowRight,
  MediaArrowLeft,
  SlideContainer,
  SlideImage,
  SlideImageContainer,
  SlideText,
  SectionGallery,
  CloseXSvg,
} from '../styles';

function MediaSlideshow({ onClose }) {
  const { media } = useSelector((state) => state.activity);
  const [current, setCurrent] = useState(0);
  const [isMoving, setIsMoving] = useState(0);

  const prevLeft = () => {
    setCurrent(current - 1);
    setIsMoving(isMoving - 100);
  };

  const nextRight = () => {
    setCurrent(current + 1);
    setIsMoving(isMoving + 100);
  };
  console.log(media.length);

  return (
    <>
      <JumbotronGallery>
        <SectionGallery>
          <GalleryCarousel>
            <MediaArrowLeft current={current} onClick={prevLeft} />
            {media.map((item, index) => (
              <SlideContainer isMoving={isMoving}>
                <SlideImageContainer>
                  <SlideImage src={item.url}></SlideImage>
                  <SlideText>{`${index + 1}/${media.length}`}</SlideText>
                </SlideImageContainer>
              </SlideContainer>
            ))}
            <MediaArrowRight
              current={current}
              mediaLength={media.length}
              onClick={nextRight}
            />
          </GalleryCarousel>
          <GalleryCloseBtn onClick={onClose}>
            <CloseXSvg />
          </GalleryCloseBtn>
        </SectionGallery>
      </JumbotronGallery>
    </>
  );
}

export default MediaSlideshow;

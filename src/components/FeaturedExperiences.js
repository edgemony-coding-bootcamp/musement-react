import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperiences } from '../redux/experiences/experienceActions';
import Card from './Card';

function FeaturedExperiences() {
  const dispatch = useDispatch();
  const experiencesState = useSelector((state) => state.experiences);
  const { experiences } = experiencesState;

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchExperiences());
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {experiences.length > 0
        ? experiences.map((experience, key) => (
            <Card key={key} content={experience} />
          ))
        : null}
    </>
  );
}

export default FeaturedExperiences;

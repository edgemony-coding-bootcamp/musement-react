import { PriceFirstNum, PriceSecondNum } from '../styles';
import React, { useRef, useCallback } from 'react';

// Replace the value after the fifth value

export const replaceLang = (arr) => {
  const getLangCode = arr.map((data) => data.code);

  if (getLangCode.length > 5) {
    let splicedLang = getLangCode.splice(0, 5);
    let maxLangToRender = [...splicedLang, `+${getLangCode.length}`];
    return maxLangToRender.join(', ');
  } else {
    return getLangCode.slice(0, 5).join(', ');
  }
};

// Parse ISO 8601 duration format

export const parseISODuration = (iso8601Duration) => {
  const iso8601DurationRegex = /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/;
  const [, years, months, weeks, days, hours, mins] =
    iso8601Duration.match(iso8601DurationRegex) || [];

  if (days === '0' || undefined) {
    return 'Flessible';
  } else {
    return [
      'Duration up to ',
      ...(years ? [`${years} years`] : []),
      ...(months ? [`${months} months`] : []),
      ...(weeks ? [`${weeks} weeks`] : []),
      ...(days ? [`${days} days`] : []),
      ...(hours ? [`${hours} hours`] : []),
      ...(mins ? [`${mins} mins`] : []),
    ].join(' ');
  }
};

// Set price decimal numbers in different font size

export const setPriceFormat = (price) => {
  const firstChart = price.slice(0, price.indexOf('.'));
  const lastChart = price.slice(-3);
  return (
    <>
      <PriceFirstNum>{firstChart}</PriceFirstNum>
      <PriceSecondNum>{lastChart}</PriceSecondNum>
    </>
  );
};

export const useDebouncedCallback = (func, wait) => {
  const timeout = useRef();

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};

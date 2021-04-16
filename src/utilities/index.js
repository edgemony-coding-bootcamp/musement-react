import { PriceFirstNum, PriceSecondNum } from "../components/StylesCard";

// Replace the value after the fifth value 

export const replaceLang = (arr) => {
  const arrMap = arr.map((data) => data.code);
  const arrLength = arrMap.length > 5 ? arrMap.length - 5 : '';
  const arrSlice = arrMap.slice(0, 5).toString().replace(/,/g, ', ');

  return arrMap.length > 5 ? arrSlice + `, +${arrLength}` : arrSlice;
};

// Parse ISO 8601 duration format

export const parseISODuration = (iso8601Duration) => {
  const iso8601DurationRegex = /(-)?PT(?:([.,\d]+)D)?(?:([.,\d]+)H)?(?:([.,\d]+)M)?/;

  function objMatches() {
    let matches = iso8601Duration.match(iso8601DurationRegex);

    return {
      days: matches[2] === undefined ? '' : `${matches[2]} days `,
      hours: matches[3] === undefined ? '' : `${matches[3]} hours `,
      minutes: matches[4] === undefined ? '' : `${matches[4]} mins `,
    };
  }

  return (
    'Duration up to ' +
    Object.values(objMatches(iso8601Duration)).toString().replace(/,/g, '')
  );
};

// Set price decimal numbers in different font size

export const setPriceFormat = (price) => {
  const firstChart = price.slice(0, price.indexOf("."));
  const lastChart = price.slice(-3);
  return (
    <>
      <PriceFirstNum>{firstChart}</PriceFirstNum>
      <PriceSecondNum>{lastChart}</PriceSecondNum>
    </>
  );
};


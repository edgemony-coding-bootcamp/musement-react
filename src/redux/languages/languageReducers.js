import { SET_USER_LANGUAGE } from './languageConstants';

export const languageReducer = (state = {}, action) => {
  const lang = action.payload;

  // List of supported languages accepted by the endpoint
  const supportedLang = {
    uk: 'en-GB',
    us: 'en-US',
    it: 'it-IT',
    fr: 'fr-FR',
    de: 'de-DE',
    es: 'es-ES',
    pt: 'pt-PT',
    br: 'pt-BR',
    ru: 'ru-RU',
    nl: 'nl-NL',
    pl: 'pl-PL',
  };

  // finding the match between the landing url and the supported languages
  const matched = supportedLang[lang];

  switch (action.type) {
    case SET_USER_LANGUAGE:
      return {
        userLang: {
          /* setting the key value from the supported languages 
          into the userLang State inside store
          */
          [lang]: matched,
        },
      };

    default:
      return state;
  }
};

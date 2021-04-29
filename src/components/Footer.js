/* eslint-disable prettier/prettier */
import React from 'react';
import {
  DropdownOption,
  DropdownSelect,
  FooterDropdown,
  FooterDropdownWrapper,
  FooterWrapper,
  LabelDropdown,
} from '../styles';
import { LANGUAGES, CURRENCIES, DEFAULT_CURRENCY } from '../config.json';
import { setUserLang } from '../redux/languages/languageActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserCurrency } from '../redux/currencies/currencyActions';
import { setCurrencyHeader } from '../services/axiosConfig';

function Footer({ lang }) {
  const { translatedTexts } = useSelector((state) => state.translations);
  let history = useHistory();
  const dispatch = useDispatch();
  const setLang = (value) => {
    dispatch(setUserLang(value));
    history.push(
      `/${value}${window.location.pathname.replace(`/${lang}`, '')}`
    );
  };
  const setCurrency = (value) => {
    dispatch(setUserCurrency(value));
    setCurrencyHeader(value);
  };

  return (
    <FooterWrapper>
      <FooterDropdownWrapper>
        {translatedTexts.preferences}
        <FooterDropdown>
          <LabelDropdown htmlFor='language'></LabelDropdown>
          <DropdownSelect
            defaultValue={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            {LANGUAGES.map((item) => (
              <DropdownOption key={item.id} value={item.id}>
                {item.label}
              </DropdownOption>
            ))}
          </DropdownSelect>
        </FooterDropdown>
        <FooterDropdown>
          <LabelDropdown htmlFor='currency'></LabelDropdown>
          <DropdownSelect
            defaultValue={DEFAULT_CURRENCY}
            id='currency'
            onChange={(e) => setCurrency(e.target.value)}
          >
            {CURRENCIES.map((item) => (
              <DropdownOption key={item.code} value={item.code}>
                {item.symbol} {item.name}
              </DropdownOption>
            ))}
          </DropdownSelect>
        </FooterDropdown>
      </FooterDropdownWrapper>
    </FooterWrapper>
  );
}

export default Footer;

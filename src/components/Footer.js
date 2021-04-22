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
import { LANGUAGES, CURRENCY, DEF_CURR } from '../config.json';
import { setUserLang } from '../redux/languages/languageActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserCurrency } from '../redux/currencies/currencyActions';
import { setCurrencyHeader } from '../services/axiosConfig';

function Footer({ translatedText }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const setLang = (value) => {
    dispatch(setUserLang(value));
    history.push(`/${value}`);
  };
  const setCurrency = (value) => {
    dispatch(setUserCurrency(value));
    setCurrencyHeader(value);
  };

  return (
    <FooterWrapper>
      <FooterDropdownWrapper>
        {translatedText.preferences}
        <FooterDropdown>
          <LabelDropdown htmlFor='language'></LabelDropdown>
          <DropdownSelect onChange={(e) => setLang(e.target.value)}>
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
            defaultValue={DEF_CURR}
            id='currency'
            onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCY.map((item) => (
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

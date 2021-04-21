import React from 'react';
import {
  DropdownOption,
  DropdownSelect,
  FooterDropdown,
  FooterDropdownWrapper,
  FooterWrapper,
  LabelDropdown,
} from '../styles';
import { LANGUAGES } from '../config.json';
import { setUserLang } from '../redux/languages/languageActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function Footer() {
  let history = useHistory();
  const dispatch = useDispatch();
  const setLang = (value) => {
    dispatch(setUserLang(value));
    history.push(`/${value}`);
  };

  return (
    <FooterWrapper>
      <FooterDropdownWrapper>
        Preferences:
        <FooterDropdown>
          <LabelDropdown htmlFor='language'></LabelDropdown>
          <DropdownSelect
            // eslint-disable-next-line prettier/prettier
            onChange={(e) => setLang(e.target.value)}>
            {LANGUAGES.map((item) => (
              <DropdownOption key={item.id} value={item.id}>
                {item.label}
              </DropdownOption>
            ))}
          </DropdownSelect>
        </FooterDropdown>
        <FooterDropdown>
          <LabelDropdown htmlFor='currency'></LabelDropdown>
          <DropdownSelect id='currency'>
            <DropdownOption value='EUR'>Euro</DropdownOption>
          </DropdownSelect>
        </FooterDropdown>
      </FooterDropdownWrapper>
    </FooterWrapper>
  );
}

export default Footer;

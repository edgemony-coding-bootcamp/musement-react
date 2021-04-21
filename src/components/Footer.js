import React, { useEffect, useState } from 'react';
import {
  DropdownOption,
  DropdownSelect,
  FooterDropdown,
  FooterDropdownWrapper,
  FooterWrapper,
  LabelDropdown,
} from '../styles';
import { LANGUAGES } from '../config.json';
import { useDispatch } from 'react-redux';
import { setUserLang } from '../redux/languages/languageActions';
import { useHistory } from 'react-router';

function Footer() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [selectedValue, setSelectedValue] = useState('uk');
  console.log(selectedValue);

  useEffect(() => {
    dispatch(setUserLang(selectedValue));
    history.push(`/${selectedValue}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <FooterWrapper>
      <FooterDropdownWrapper>
        Preferences:
        <FooterDropdown>
          <LabelDropdown htmlFor='language'></LabelDropdown>
          <DropdownSelect
            value={selectedValue}
            // eslint-disable-next-line prettier/prettier
            onChange={(e) => setSelectedValue(e.target.value)}>
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

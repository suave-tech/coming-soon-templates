import React, { useReducer, useEffect } from 'react';
import LanguageContext from './language.context';
import languageReducer, { initialState } from './language.reducer';
import { IntlProvider } from 'react-intl';
import { InjectRTL } from '../rtl';

require('@formatjs/intl-pluralrules/polyfill');
require('@formatjs/intl-pluralrules/locale-data/ar');
require('@formatjs/intl-pluralrules/locale-data/en');
require('@formatjs/intl-pluralrules/locale-data/de');
require('@formatjs/intl-pluralrules/locale-data/es');
require('@formatjs/intl-pluralrules/locale-data/zh');
require('@formatjs/intl-pluralrules/locale-data/he');

const LanguageProvider = ({ children, messages }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  const toggleLanguage = (lang) => {
    dispatch({ type: 'CURRENT_LANGUAGE', payload: lang });
    localStorage.setItem('lang', lang);
  };

  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (localLang) {
      toggleLanguage(localLang);
    } else {
      toggleLanguage(navigator.language.split('-')[0]);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ state, toggleLanguage, dispatch }}>
      <IntlProvider locale={state.lang} messages={messages[state.lang]}>
        <InjectRTL lang={state.lang}>{children}</InjectRTL>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

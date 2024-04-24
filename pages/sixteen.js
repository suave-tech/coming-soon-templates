import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock';
import MainWrapper, {
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  ContactFormWrap,
  LogoImageContainer,
  ContentWrapper,
  NotifyButton,
} from 'common/ui/sixteen.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/sixteen';
// Language translation files
import localEng from 'common/data/translation/sixteen/en.json';
import localAr from 'common/data/translation/sixteen/ar.json';
import localEs from 'common/data/translation/sixteen/es.json';
import localDe from 'common/data/translation/sixteen/de.json';
import localCn from 'common/data/translation/sixteen/zh.json';
import localIl from 'common/data/translation/sixteen/he.json';
import { Container, SocialShare } from '../components';
import ContactForm from 'components/ContactForm/ContactForm';
import Button from 'components/Button';
import NoSSR from 'components/no-ssr';

// images
import LogoTwo from 'common/static/images/logoTwo.png';

// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

const IndexPage = () => {
  const [visible, setVisible] = useState(false);
  const toggleContact = () => {
    setVisible(true);
  };

  return (
    <NoSSR>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <NextSeo
            title="Coming Soon 16"
            description="React Next Coming Soon Template."
          />
          <MainWrapper>
            <LogoImageContainer>
              <Link href={'/sixteen'}>
                <img src={LogoTwo.src} alt="logo" />
              </Link>
            </LogoImageContainer>
            <Container className="mainContainer">
              <MainContentSection>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
                <ContentWrapper>
                  <p>
                    <FormattedMessage id="ticker" />
                  </p>
                  <h2>
                    <FormattedMessage id="mainMessage" />
                  </h2>
                  {visible ? (
                    <ContactFormWrap>
                      <ContactForm />
                    </ContactFormWrap>
                  ) : (
                    ''
                  )}

                  {!visible ? (
                    <NotifyButton>
                      <Button
                        type="submit"
                        title="notifyText"
                        onClick={toggleContact}
                      />
                    </NotifyButton>
                  ) : (
                    ''
                  )}
                </ContentWrapper>
              </MainContentSection>
            </Container>
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </MainWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </NoSSR>
  );
};

export default IndexPage;

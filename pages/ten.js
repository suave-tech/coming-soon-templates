import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock.js';
import ContactFormPortion from 'components/ContactForm/ContactForm';
import MainWrapper, {
  FullWrapper,
  MainContentSection,
  NormalClockWrapper,
  ContactForm,
  FooterSection,
  LogoImageContainer,
  ImageSection,
} from 'common/ui/ten.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/ten';
// Language translation files
import localEng from 'common/data/translation/ten/en.json';
import localAr from 'common/data/translation/ten/ar.json';
import localEs from 'common/data/translation/ten/es.json';
import localDe from 'common/data/translation/ten/de.json';
import localCn from 'common/data/translation/ten/zh.json';
import localIl from 'common/data/translation/ten/he.json';
import { Container, SocialShare } from '../components';
import NoSSR from 'components/no-ssr';

// images
import LogoOne from 'common/static/images/logoOne.png';
import Illustration from 'common/static/images/ten/image.svg';

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

const IndexPage = () => (
  <NoSSR>
    <ParallaxProvider>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <NextSeo
            title="Coming Soon 10"
            description="React Next Coming Soon Template."
          />
          <FullWrapper>
            <MainWrapper>
              <LogoImageContainer>
                <Link href={'/ten'}>
                  <img src={LogoOne.src} alt="logo" />
                </Link>
              </LogoImageContainer>
              <Container className="mainContainer">
                <MainContentSection>
                  <NormalClockWrapper>
                    <Fade>
                      <NormalClock countdown={deadline} />
                    </Fade>
                  </NormalClockWrapper>
                  <h2>
                    <FormattedMessage id="mainMessage" />
                  </h2>
                  <p>
                    <FormattedMessage id="description" />
                  </p>
                  <ContactForm>
                    <ContactFormPortion />
                  </ContactForm>
                </MainContentSection>
              </Container>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </MainWrapper>
            <ImageSection
              style={{
                backgroundImage: `url(${Illustration.src})`,
                backgroundPosition: 'top right',
                backgroundSize: 'cover',
              }}
            ></ImageSection>
          </FullWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  </NoSSR>
);

export default IndexPage;

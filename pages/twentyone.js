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
  CornerImages,
  MainContentSection,
  NormalClockWrapper,
  ContactForm,
  LogoImageContainer,
  ImageSection,
  FooterSection,
} from 'common/ui/twentyone.style';
import { SOCIAL_PROFILES } from 'common/data/social-share/three';

// Language translation files
import localEng from 'common/data/translation/twentyone/en.json';
import localAr from 'common/data/translation/twentyone/ar.json';
import localEs from 'common/data/translation/twentyone/es.json';
import localDe from 'common/data/translation/twentyone/de.json';
import localCn from 'common/data/translation/twentyone/zh.json';
import localIl from 'common/data/translation/twentyone/he.json';
import { Container, SocialShare } from '../components';
import NoSSR from 'components/no-ssr';

// images
import LogoTwo from 'common/static/images/logoTwo.png';
import Shape1 from 'common/static/images/twentyone/top-left.png';
import Shape2 from 'common/static/images/twentyone/bottom-right.png';

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
            title="Coming Soon 21"
            description="React Next Coming Soon Template."
          />
          <FullWrapper>
            <CornerImages>
              <Fade left>
                <img src={Shape1.src} alt="corner one" />
              </Fade>
              <Fade right>
                <img src={Shape2.src} alt="corner two" />
              </Fade>
            </CornerImages>
            <MainWrapper>
              <Container className="mainContainer">
                <MainContentSection>
                  <LogoImageContainer>
                    <Link href={'/twentyone'}>
                      <img src={LogoTwo.src} alt="logo" />
                    </Link>
                  </LogoImageContainer>
                  <NormalClockWrapper>
                    <NormalClock countdown={deadline} />
                  </NormalClockWrapper>
                  <h2>
                    <FormattedMessage id="mainMessage" />
                  </h2>
                  <p>
                    <FormattedMessage id="description" />
                  </p>
                  <ContactForm>
                    <Fade top>
                      <ContactFormPortion />
                    </Fade>
                  </ContactForm>
                  <FooterSection>
                    <SocialShare items={SOCIAL_PROFILES} />
                    <p>
                      <FormattedMessage id="copyrightText" />
                    </p>
                  </FooterSection>
                </MainContentSection>
              </Container>
            </MainWrapper>
            <ImageSection />
          </FullWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  </NoSSR>
);

export default IndexPage;

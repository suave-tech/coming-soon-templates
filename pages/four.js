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
import ContactForm from 'components/ContactForm/ContactForm';
import MainWrapper, {
  MainContentSection,
  ContactFormWrap,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
  CornerImages,
  FullWrapper,
} from 'common/ui/four.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/four';
// Language translation files
import localEng from 'common/data/translation/four/en.json';
import localAr from 'common/data/translation/four/ar.json';
import localEs from 'common/data/translation/four/es.json';
import localDe from 'common/data/translation/four/de.json';
import localCn from 'common/data/translation/four/zh.json';
import localIl from 'common/data/translation/four/he.json';
import { Container, SocialShare } from '../components';
import NoSSR from 'components/no-ssr';

// images
import LogoOne from 'common/static/images/logoOne.png';
import ShapeOne from 'common/static/images/four/top-left.svg';
import ShapeTwo from 'common/static/images/four/top-right.svg';
import ShapeThree from 'common/static/images/four/bottom-left.svg';
import ShapeFour from 'common/static/images/four/bottom-right.svg';

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
            title="Coming Soon 4"
            description="React Next Coming Soon Template."
          />
          <FullWrapper className="fullWrapper">
            <CornerImages>
              <Fade left>
                <img src={ShapeOne.src} alt="corner one" />
              </Fade>
              <Fade right>
                <img src={ShapeTwo.src} alt="corner two" />
              </Fade>
              <Fade left>
                <img src={ShapeThree.src} alt="corner three" />
              </Fade>
              <Fade right>
                <img src={ShapeFour.src} alt="corner four" />
              </Fade>
            </CornerImages>
            <MainWrapper>
              <LogoImageContainer>
                <Link href={'/four'}>
                  <img src={LogoOne.src} alt="logo" />
                </Link>
              </LogoImageContainer>

              <Container className="mainContainer">
                <MainContentSection>
                  <NormalClockWrapper>
                    <NormalClock countdown={deadline} />
                  </NormalClockWrapper>
                  <h2>
                    <FormattedMessage id="mainMessage" />
                  </h2>
                  <p>
                    <FormattedMessage id="description" />
                  </p>

                  <ContactFormWrap>
                    <ContactForm />
                  </ContactFormWrap>
                </MainContentSection>
              </Container>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </MainWrapper>
          </FullWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  </NoSSR>
);

export default IndexPage;

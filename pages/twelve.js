import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock.js';
import ContactFormPortion from 'components/ContactForm/ContactForm';
import MainWrapper, {
  MainContentSection,
  ContactForm,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
  BottomShape,
  CloudImages,
  ImageContainer,
} from 'common/ui/twelve.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/twelve';
// Language translation files
import localEng from 'common/data/translation/twelve/en.json';
import localAr from 'common/data/translation/twelve/ar.json';
import localEs from 'common/data/translation/twelve/es.json';
import localDe from 'common/data/translation/twelve/de.json';
import localCn from 'common/data/translation/twelve/zh.json';
import localIl from 'common/data/translation/twelve/he.json';
import { Container, SocialShare } from '../components';
import NoSSR from 'components/no-ssr';

// images
import LogoOne from 'common/static/images/logoOne.png';
import CatImage from 'common/static/images/twelve/image.png';
import Cloud1 from 'common/static/images/twelve/cloud1.svg';
import Cloud2 from 'common/static/images/twelve/cloud2.svg';
import Cloud3 from 'common/static/images/twelve/cloud3.svg';
import Shape1 from 'common/static/images/twelve/shape1.svg';
import Shape2 from 'common/static/images/twelve/shape2.svg';

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
            title="Coming Soon 12"
            description="React Next Coming Soon Template."
          />
          <div className="fullWrapper">
            <MainWrapper>
              <Container className="mainContainer">
                <MainContentSection>
                  <LogoImageContainer>
                    <Link href={'/twelve'}>
                      <img src={LogoOne.src} alt="logo" />
                    </Link>
                  </LogoImageContainer>

                  <h2>
                    <FormattedMessage id="mainMessage" />
                  </h2>
                  <NormalClockWrapper>
                    <NormalClock countdown={deadline} />
                  </NormalClockWrapper>
                  <ContactForm>
                    <ContactFormPortion />
                  </ContactForm>
                </MainContentSection>
                <ImageContainer>
                  <img src={CatImage.src} alt="MainImage" />
                </ImageContainer>
              </Container>
              <CloudImages>
                <Fade left delay={400}>
                  <img src={Cloud1.src} alt="CloudImage 1" />
                </Fade>
                <Fade right delay={600}>
                  <img src={Cloud2.src} alt="CloudImage 2" />
                </Fade>
                <Fade top delay={800}>
                  <img src={Cloud3.src} alt="CloudImage 3" />
                </Fade>
              </CloudImages>
              <div className="bottomAnimation">
                <Parallax y={[50, -40]}>
                  <BottomShape>
                    <Fade left>
                      <img src={Shape2.src} alt="Bottom Shape Left" />
                    </Fade>
                    <Fade right>
                      <img src={Shape1.src} alt="Bottom Shape Right" />
                    </Fade>
                  </BottomShape>
                </Parallax>
              </div>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </MainWrapper>
          </div>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  </NoSSR>
);

export default IndexPage;

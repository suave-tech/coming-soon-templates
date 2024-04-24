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
  LogoImageContainer,
  ImageSection,
} from 'common/ui/nine.style';

// Language translation files
import localEng from 'common/data/translation/nine/en.json';
import localAr from 'common/data/translation/nine/ar.json';
import localEs from 'common/data/translation/nine/es.json';
import localDe from 'common/data/translation/nine/de.json';
import localCn from 'common/data/translation/nine/zh.json';
import localIl from 'common/data/translation/nine/he.json';
import { Container } from '../components';
import NoSSR from 'components/no-ssr';

// images
import LogoOne from 'common/static/images/logoOne.png';
import Illustration from 'common/static/images/nine/image.png';

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
            title="Coming Soon 9"
            description="React Next Coming Soon Template."
          />
          <FullWrapper>
            <MainWrapper>
              <Container className="mainContainer">
                <MainContentSection>
                  <LogoImageContainer>
                    <Link href={'/nine'}>
                      <img src={LogoOne.src} alt="logo" />
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
                </MainContentSection>
              </Container>
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

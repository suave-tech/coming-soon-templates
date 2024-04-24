import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { FormattedMessage } from 'react-intl';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock.js';
import MainWrapper, {
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
} from 'common/ui/six.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/six';

// Language translation files
import localEng from 'common/data/translation/six/en.json';
import localAr from 'common/data/translation/six/ar.json';
import localEs from 'common/data/translation/six/es.json';
import localDe from 'common/data/translation/six/de.json';
import localCn from 'common/data/translation/six/zh.json';
import localIl from 'common/data/translation/six/he.json';
import { Container, SocialShare } from '../components';
import NoSSR from 'components/no-ssr';

// images
import LogoTwo from 'common/static/images/logoTwo.png';
import BG from 'common/static/images/six/bg.png';

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
            title="Coming Soon 6"
            description="React Next Coming Soon Template."
          />
          <MainWrapper
            style={{
              backgroundImage: `url(${BG.src})`,
              backgroundColor: '#18192e',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <LogoImageContainer>
              <Link href={'/six'}>
                <img src={LogoTwo.src} alt="logo" />
              </Link>
            </LogoImageContainer>
            <Container className="mainContainer">
              <MainContentSection>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                <p>
                  <FormattedMessage id="description" />
                </p>
                <Fade>
                  <NormalClockWrapper>
                    <NormalClock countdown={deadline} />
                  </NormalClockWrapper>
                </Fade>
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
    </ParallaxProvider>
  </NoSSR>
);

export default IndexPage;

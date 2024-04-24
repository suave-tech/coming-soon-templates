import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { FormattedMessage } from 'react-intl';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock';
import ContactFormPortion from 'components/ContactForm/ContactForm';
import MainWrapper, {
  FullWrapper,
  MainContentSection,
  NormalClockWrapper,
  ContactForm,
  FooterSection,
  LogoImageContainer,
  ImageSection,
  MainWrapperSection,
} from 'common/ui/fifteen.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/fifteen';
// Language translation files
import localEng from 'common/data/translation/fifteen/en.json';
import localAr from 'common/data/translation/fifteen/ar.json';
import localEs from 'common/data/translation/fifteen/es.json';
import localDe from 'common/data/translation/fifteen/de.json';
import localCn from 'common/data/translation/fifteen/zh.json';
import localIl from 'common/data/translation/fifteen/he.json';
import { Container, SocialShare } from '../components';
import NoSSR from 'components/no-ssr';

// images
import LogoTwo from 'common/static/images/logoTwo.png';
import Illustration from 'common/static/images/fifteen/illustration.png';

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
  return (
    <NoSSR>
      <ParallaxProvider>
        <LanguageProvider messages={messages}>
          <React.Fragment>
            <NextSeo
              title="Coming Soon 15"
              description="React Next Coming Soon Template."
            />
            <MainWrapperSection>
              <LogoImageContainer>
                <Link href={'/eight'}>
                  <img src={LogoTwo.src} alt="logo" />
                </Link>
              </LogoImageContainer>
              <FullWrapper>
                <MainWrapper>
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
                      <ContactForm>
                        <Fade>
                          <ContactFormPortion />
                        </Fade>
                      </ContactForm>
                    </MainContentSection>
                  </Container>
                </MainWrapper>

                <ImageSection>
                  <div
                    style={{
                      backgroundImage: `url(${Illustration.src})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      height: '100%',
                      width: '100%',
                    }}
                  ></div>
                </ImageSection>
              </FullWrapper>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </MainWrapperSection>

            <LanguageSwitcher languageConfig={languageConfig} />
          </React.Fragment>
        </LanguageProvider>
      </ParallaxProvider>
    </NoSSR>
  );
};

export default IndexPage;

import React from 'react';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock';
import MainWrapper, {
  LogoImageContainer,
  GradientDiv,
  MainContentSection,
  ContactForm,
  NormalClockWrapper,
  FooterSection,
  ClockSection,
  BottomIllustrationWrapper,
} from 'common/ui/two.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/two';
// Language translation files
import localEng from 'common/data/translation/two/en.json';
import localAr from 'common/data/translation/two/ar.json';
import localEs from 'common/data/translation/two/es.json';
import localDe from 'common/data/translation/two/de.json';
import localCn from 'common/data/translation/two/zh.json';
import localIl from 'common/data/translation/two/he.json';
import { Container, SocialShare } from '../components';
import MaterialContactForm from 'components/MaterialContactForm/MaterialContactForm';
import NoSSR from 'components/no-ssr';

// images
import LogoTwo from 'common/static/images/logoTwo.png';
import Illustration from 'common/static/images/two/1.png';

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
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <NextSeo
            title="Coming Soon 2"
            description="React Next Coming Soon Template."
          />

          <MainWrapper style={{ backgroundColor: '#03103b' }}>
            <LogoImageContainer>
              <Link href={'/two'}>
                <img src={LogoTwo.src} alt="logo" />
              </Link>
            </LogoImageContainer>
            <GradientDiv />
            <Container className="mainContainer">
              <MainContentSection>
                <span className="Ticker">
                  <FormattedMessage id="ticker" />
                </span>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                <p>
                  <FormattedMessage id="description" />
                </p>

                <ContactForm>
                  <MaterialContactForm />
                </ContactForm>
              </MainContentSection>
              <ClockSection>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} divider="true" />
                </NormalClockWrapper>
              </ClockSection>
            </Container>
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
            <BottomIllustrationWrapper>
              <Image
                src={Illustration}
                alt="Bottom"
                height={260}
                width={1920}
                quality={100}
                priority
              />
            </BottomIllustrationWrapper>
          </MainWrapper>
        </React.Fragment>
        <LanguageSwitcher languageConfig={languageConfig} />
      </LanguageProvider>
    </NoSSR>
  );
};

export default IndexPage;

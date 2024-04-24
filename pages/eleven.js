import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock.js';
import MainWrapper, {
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  ContactFormWrap,
  LogoImageContainer,
  ParticleContainer,
  ContentWrapper,
  NotifyButton,
} from 'common/ui/eleven.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/three';
// Language translation files
import localEng from 'common/data/translation/eleven/en.json';
import localAr from 'common/data/translation/eleven/ar.json';
import localEs from 'common/data/translation/eleven/es.json';
import localDe from 'common/data/translation/eleven/de.json';
import localCn from 'common/data/translation/eleven/zh.json';
import localIl from 'common/data/translation/eleven/he.json';
import { Container, SocialShare } from '../components';
import ContactForm from 'components/ContactForm/ContactForm';
import Button from 'components/Button';
import NoSSR from 'components/no-ssr';

// images
import LogoOne from 'common/static/images/logoOne.png';
import Particle1 from 'common/static/images/eleven/2.png';
import Particle2 from 'common/static/images/eleven/3.png';
import Particle3 from 'common/static/images/eleven/6.png';
import Particle4 from 'common/static/images/eleven/7.png';
import Particle5 from 'common/static/images/eleven/8.png';
import Particle6 from 'common/static/images/eleven/9.png';

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

const ParticlesComponent = () => {
  const customInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });
  return (
    <>
      <Particles
        className="particle"
        init={customInit}
        options={{
          particles: {
            number: {
              value: 14,
              density: { enable: true, value_area: 1400 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: Particle1.src,
                  width: 15,
                  height: 15,
                },
                {
                  src: Particle2.src,
                  width: 45,
                  height: 40,
                },
                {
                  src: Particle3.src,
                  width: 26,
                  height: 26,
                },
                {
                  src: Particle4.src,
                  width: 54,
                  height: 30,
                },
                {
                  src: Particle5.src,
                  width: 44,
                  height: 30,
                },

                {
                  src: Particle6.src,
                  width: 50,
                  height: 30,
                },
              ],
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 1, sync: false },
            },
            size: {
              value: 10,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

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
            title="Coming Soon 11"
            description="React Next Coming Soon Template."
          />
          <MainWrapper>
            <ParticleContainer>
              <ParticlesComponent />
            </ParticleContainer>
            <LogoImageContainer>
              <Link href={'/eleven'}>
                <img src={LogoOne.src} alt="logo" />
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

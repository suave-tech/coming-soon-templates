import React, { useCallback } from 'react';
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
  LogoImageContainer,
  ParticleContainer,
} from 'common/ui/three.style';
import { SOCIAL_PROFILES } from 'common/data/social-share/three';
// Language translation files
import localEng from 'common/data/translation/three/en.json';
import localAr from 'common/data/translation/three/ar.json';
import localEs from 'common/data/translation/three/es.json';
import localDe from 'common/data/translation/three/de.json';
import localCn from 'common/data/translation/three/zh.json';
import localIl from 'common/data/translation/three/he.json';
import { Container, SocialShare } from '../components';
import ContactForm from 'components/ContactForm/ContactForm';
import NoSSR from 'components/no-ssr';

// images
import LogoOne from 'common/static/images/logoOne.png';
import ParticleOne from 'common/static/images/three/1.png';
import ParticleTwo from 'common/static/images/three/2.png';
import ParticleThree from 'common/static/images/three/3.png';
import ParticleFour from 'common/static/images/three/4.png';
import ParticleFive from 'common/static/images/three/5.png';
import ParticleSix from 'common/static/images/three/6.png';
import ParticleSeven from 'common/static/images/three/7.png';

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
              value: 10,
              density: { enable: true, value_area: 1400 },
            },
            shape: {
              type: ['images'],
              images: [
                {
                  src: ParticleOne.src,
                  width: 34,
                  height: 25,
                },
                {
                  src: ParticleTwo.src,
                  width: 29,
                  height: 45,
                },
                {
                  src: ParticleThree.src,
                  width: 34,
                  height: 24,
                },
                {
                  src: ParticleFour.src,
                  width: 28,
                  height: 40,
                },
                {
                  src: ParticleFive.src,
                  width: 22,
                  height: 20,
                },
                {
                  src: ParticleSix.src,
                  width: 26,
                  height: 40,
                },
                {
                  src: ParticleSeven.src,
                  width: 22,
                  height: 20,
                },
                {
                  src: ParticleOne.src,
                  width: 22,
                  height: 20,
                },
                {
                  src: ParticleTwo.src,
                  width: 50,
                  height: 24,
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
              speed: 1.5,
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

const IndexPage = () => (
  <NoSSR>
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <NextSeo
          title="Coming Soon 3"
          description="React Next Coming Soon Template."
        />
        <MainWrapper>
          <ParticleContainer>
            <ParticlesComponent />
          </ParticleContainer>
          <LogoImageContainer>
            <Link href={'/three'}>
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

              <ContactForm />
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

export default IndexPage;

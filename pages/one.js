import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock';
import MainWrapper, {
  LogoImageContainer,
  GradientDiv,
  ParticleWrapper,
  MainContentSection,
  // ContactForm,
  NormalClockWrapper,
  FooterSection,
} from 'common/ui/one.style';

import { SOCIAL_PROFILES } from 'common/data/social-share/one';
// Language translation files
import localEng from 'common/data/translation/one/en.json';
import localAr from 'common/data/translation/one/ar.json';
import localEs from 'common/data/translation/one/es.json';
import localDe from 'common/data/translation/one/de.json';
import localCn from 'common/data/translation/one/zh.json';
import localIl from 'common/data/translation/one/he.json';
import { Container, SocialShare } from '../components';
import MaterialContactForm from 'components/MaterialContactForm/MaterialContactForm';
import NoSSR from 'components/no-ssr';

// images
import LogoTwo from 'common/static/images/logoTwo.png';

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

export default function IndexPage() {
  const customInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });
  return (
    <NoSSR>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <NextSeo
            title="Coming Soon 1"
            description="React Next Coming Soon Template."
          />
          <MainWrapper>
            <LogoImageContainer>
              <Link href={'/one'}>
                <img src={LogoTwo.src} alt="logo" />
              </Link>
            </LogoImageContainer>
            <ParticleWrapper>
              <Particles
                id="lineparticles"
                init={customInit}
                options={{
                  particles: {
                    number: {
                      value: 100,
                      density: {
                        enable: true,
                        value_area: 600,
                      },
                    },
                    shape: {
                      type: 'circle',
                      stroke: {
                        width: 0,
                      },
                    },
                    opacity: {
                      value: 0.1,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                      },
                    },
                    size: {
                      value: 7,
                      random: true,
                      anim: {
                        value: 4,
                      },
                    },
                    line_linked: {
                      enable: true,
                      distance: 100,
                      opacity: 0.4,
                      width: 1,
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: 'none',
                      random: false,
                      straight: false,
                      out_mode: 'out',
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                      },
                    },
                  },
                  interactivity: {
                    detect_on: 'canvas',
                    events: {
                      onhover: {
                        enable: true,
                        mode: 'grab',
                      },
                      onclick: {
                        enable: true,
                        mode: 'push',
                      },
                      resize: true,
                    },
                    modes: {
                      grab: {
                        distance: 300,
                        line_linked: {
                          opacity: 0.4,
                          enable: true,
                        },
                      },
                      push: {
                        particles_nb: 8,
                      },
                      remove: {
                        particles_nb: 2,
                      },
                    },
                  },
                  retina_detect: true,
                }}
              />
            </ParticleWrapper>
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
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} divider="true" />
                </NormalClockWrapper>
                <MaterialContactForm />
              </MainContentSection>
            </Container>
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </MainWrapper>
        </React.Fragment>
        <LanguageSwitcher languageConfig={languageConfig} />
      </LanguageProvider>
    </NoSSR>
  );
}

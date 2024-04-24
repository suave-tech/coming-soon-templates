import React, { useState, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { useIsMounted } from 'common/hooks/use-is-mounted';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import { SOCIAL_PROFILES } from 'common/data/social-share/twentythree';
import Button from 'components/Button';
import { SocialShare } from '../components';
import SubscriptionForm from 'components/ContactForm/ContactForm';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import CountDownTimer from '../components/twentythree/CountDownTimer';
import About from '../components/twentythree/About';
import Contact from '../components/twentythree/Contact';
// Language translation files
import localEng from 'common/data/translation/twentythree/en.json';
import localAr from 'common/data/translation/twentythree/ar.json';
import localEs from 'common/data/translation/twentythree/es.json';
import localDe from 'common/data/translation/twentythree/de.json';
import localCn from 'common/data/translation/twentythree/zh.json';
import localIl from 'common/data/translation/twentythree/he.json';
import NoSSR from 'components/no-ssr';

// images
import LogoOne from 'common/static/images/logoOne.png';

// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};
import {
  MainWrapper,
  Logo,
  LeftSection,
  LeftContent,
  NotifyButton,
  ContactFormWrap,
  FooterSection,
  RightSection,
} from 'common/ui/twentythree.style';

const IndexPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [navColor, setNavColor] = useState('primary');
  const isTabletWide = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const mounted = useIsMounted();

  const handleSubsForm = () => {
    setShowForm(true);
  };

  let options = {
    sectionClassName: 'section',
    arrowNavigation: true,
    anchors: ['home', 'about', 'contact'],
    navigation: true,
  };

  return (
    <NoSSR>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <NextSeo
            title="Coming Soon 23"
            description="React Next Coming Soon Template."
          />
          <MainWrapper>
            <LeftSection>
              <Logo>
                <Link href={'/twentythree'}>
                  <img src={LogoOne.src} alt="logo" />
                </Link>
              </Logo>
              <LeftContent>
                <p className="slogan">
                  <FormattedMessage id="ticker" />
                </p>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>

                {mounted && (
                  <>
                    {isTabletWide && (
                      <div>
                        <CountDownTimer />
                      </div>
                    )}
                  </>
                )}

                {showForm && (
                  <ContactFormWrap>
                    <SubscriptionForm />
                  </ContactFormWrap>
                )}

                {!showForm && (
                  <NotifyButton>
                    <Button
                      type="submit"
                      title="notifyText"
                      onClick={handleSubsForm}
                    />
                  </NotifyButton>
                )}
              </LeftContent>

              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </LeftSection>

            {mounted && (
              <>
                {isTabletWide && (
                  <Fragment>
                    <About />
                    <Contact />
                  </Fragment>
                )}
              </>
            )}

            {mounted && (
              <>
                {isDesktop && (
                  <RightSection>
                    <SectionsContainer {...options}>
                      <Section>
                        <CountDownTimer />
                      </Section>
                      <Section>
                        <About />
                      </Section>
                      <Section>
                        <Contact />
                      </Section>
                    </SectionsContainer>
                    <Header className="pagination">
                      <nav className={`nav-${navColor}`}>
                        <a
                          href="#home"
                          className="active"
                          onClick={() => setNavColor('primary')}
                        >
                          <span className="label">Home</span>
                          <span className="dot"></span>
                        </a>
                        <a href="#about" onClick={() => setNavColor('light')}>
                          <span className="label">About</span>
                          <span className="dot"></span>
                        </a>
                        <a href="#contact" onClick={() => setNavColor('light')}>
                          <span className="label">Contact</span>
                          <span className="dot"></span>
                        </a>
                      </nav>
                    </Header>
                  </RightSection>
                )}
              </>
            )}
          </MainWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </NoSSR>
  );
};

export default IndexPage;

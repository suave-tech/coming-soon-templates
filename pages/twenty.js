import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { home } from 'react-icons-kit/entypo/home';
import { x } from 'react-icons-kit/feather/x';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock.js';
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import Button from 'components/Button';
import ContactForm from 'components/MaterialContactFormTwo/MaterialContactForm';
import SubscriptionForm from 'components/ContactForm/ContactForm';
import MainContentWrapper, {
  LogoImageContainer,
  SidebarButton,
  MainContentSection,
  SubscriptionWrapper,
  MainWrapper,
  NormalClockWrapper,
  SideBar,
  Overlay,
  FooterSection,
  SidebarContent,
  About,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
  SidebarClose,
} from 'common/ui/twenty.style';
import { SOCIAL_PROFILES } from 'common/data/social-share/six';
// Language translation files
import localEng from 'common/data/translation/twenty/en.json';
import localAr from 'common/data/translation/twenty/ar.json';
import localEs from 'common/data/translation/twenty/es.json';
import localDe from 'common/data/translation/twenty/de.json';
import localCn from 'common/data/translation/twenty/zh.json';
import localIl from 'common/data/translation/twenty/he.json';
import { Container, SocialShare } from '../components';
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

const IndexPage = () => {
  const [state, setState] = useState({
    toggle: false,
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  return (
    <NoSSR>
      <ParallaxProvider>
        <LanguageProvider messages={messages}>
          <React.Fragment>
            <NextSeo
              title="Coming Soon 20"
              description="React Next Coming Soon Template."
            />

            <MainWrapper
              className={state.toggle === true ? 'sidebar-open' : ''}
            >
              <MainContentWrapper>
                <LogoImageContainer>
                  <Link href={'/six'}>
                    <img src={LogoTwo.src} alt="logo" />
                  </Link>
                  {state.toggle === false ? (
                    <SidebarButton>
                      <Button
                        icon={<Icon icon={androidMenu} size={25} />}
                        onClick={toggleHandle}
                      />
                    </SidebarButton>
                  ) : (
                    ''
                  )}
                </LogoImageContainer>
                <Container className="mainContainer">
                  <MainContentSection>
                    <Fade>
                      <NormalClockWrapper>
                        <NormalClock countdown={deadline} />
                      </NormalClockWrapper>
                    </Fade>
                    <h2>
                      <FormattedMessage id="mainMessage" />
                    </h2>
                    <p>
                      <FormattedMessage id="description" />
                    </p>
                    <SubscriptionWrapper>
                      <SubscriptionForm />
                    </SubscriptionWrapper>
                  </MainContentSection>
                </Container>
                <FooterSection>
                  <SocialShare items={SOCIAL_PROFILES} />
                  <p>
                    <FormattedMessage id="copyrightText" />
                  </p>
                </FooterSection>
              </MainContentWrapper>
              <SideBar className={state.toggle === true ? 'expand' : ''}>
                <SidebarContent>
                  <SidebarClose type="submit" aria-label="close">
                    <Icon icon={x} size={33} onClick={toggleHandle} />
                  </SidebarClose>
                  <About>
                    <h2>
                      <FormattedMessage id="aboutTitle" />
                    </h2>
                    <p>
                      <FormattedMessage id="aboutText" />
                    </p>
                  </About>

                  <Contact>
                    <h2>
                      <FormattedMessage id="contactTitle" />
                    </h2>
                    <ContactForm />
                  </Contact>

                  <Info>
                    <InfoItem>
                      <InfoIcon>
                        <Icon icon={location} size={33} />
                      </InfoIcon>
                      <h4>
                        <FormattedMessage id="addressTitle" />
                      </h4>
                      <p>
                        <FormattedMessage id="addressDetails" />
                      </p>
                    </InfoItem>

                    <InfoItem>
                      <InfoIcon>
                        <Icon icon={phone} size={32} />
                      </InfoIcon>
                      <h4>
                        <FormattedMessage id="phoneTitle" />
                      </h4>
                      <p>
                        <FormattedMessage id="phoneNumbers" />
                      </p>
                    </InfoItem>

                    <InfoItem>
                      <InfoIcon>
                        <Icon icon={home} size={32} />
                      </InfoIcon>
                      <h4>
                        <FormattedMessage id="websiteTitle" />
                      </h4>
                      <p>
                        <FormattedMessage id="Websites" />
                      </p>
                    </InfoItem>
                  </Info>
                </SidebarContent>
                <Overlay className={state.toggle === true ? 'expand' : ''} />
              </SideBar>
            </MainWrapper>
            <LanguageSwitcher languageConfig={languageConfig} />
          </React.Fragment>
        </LanguageProvider>
      </ParallaxProvider>
    </NoSSR>
  );
};

export default IndexPage;

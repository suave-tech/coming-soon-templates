import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Modal from 'react-modal';
import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { home } from 'react-icons-kit/entypo/home';
import { x } from 'react-icons-kit/feather/x';
import LanguageProvider from 'common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from 'common/LanguageSwitcher';
import languageConfig from 'common/LanguageSwitcher/config';
import NormalClock from 'components/NormalClock/NormalClock.js';
import Button from 'components/Button';
import ContactForm from 'components/MaterialContactFormTwo/MaterialContactForm';
import SubscribeModal from 'components/SubscribeModal/SubscribeModal';
import MainContentWrapper, {
  MainContentSection,
  NormalClockWrapper,
  LogoImageContainer,
  ButtonWrapper,
  MainWrapper,
  SideBar,
  Overlay,
  SidebarContent,
  About,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
  SidebarClose,
  FooterSection,
  ContactButton,
  ModalStyle,
} from 'common/ui/fourteen.style';

// Language translation files
import localEng from 'common/data/translation/fourteen/en.json';
import localAr from 'common/data/translation/fourteen/ar.json';
import localEs from 'common/data/translation/fourteen/es.json';
import localDe from 'common/data/translation/fourteen/de.json';
import localCn from 'common/data/translation/fourteen/zh.json';
import localIl from 'common/data/translation/fourteen/he.json';
import { SOCIAL_PROFILES } from 'common/data/social-share/fourteen';
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <NoSSR>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <NextSeo
            title="Coming Soon 14"
            description="React Next Coming Soon Template."
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel="Selected Option"
            className="newsletter-modal"
          >
            <SubscribeModal closeHandler={closeModal} />
          </Modal>
          <ModalStyle />
          <MainWrapper>
            <MainContentWrapper>
              <LogoImageContainer>
                <Link href={'/fourteen'}>
                  <img src={LogoTwo.src} alt="logo" />
                </Link>
                <ContactButton type="submit" onClick={toggleHandle}>
                  Contact Us
                </ContactButton>
              </LogoImageContainer>
              <Container className="mainContainer">
                <MainContentSection>
                  <h2>
                    <FormattedMessage id="mainMessage" />
                  </h2>
                  <p>
                    <FormattedMessage id="description" />
                  </p>
                  <NormalClockWrapper>
                    <NormalClock countdown={deadline} />
                  </NormalClockWrapper>
                  <ButtonWrapper>
                    <Button
                      type="submit"
                      title="modalButtonText"
                      onClick={() => setIsOpen(true)}
                    />
                  </ButtonWrapper>
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
                <Overlay className={state.toggle === true ? 'expand' : ''} />
              </SidebarContent>
            </SideBar>
          </MainWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </NoSSR>
  );
};

export default IndexPage;

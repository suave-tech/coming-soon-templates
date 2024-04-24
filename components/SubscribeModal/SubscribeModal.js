import React from "react";
import { FormattedMessage } from "react-intl";
import { Icon } from "react-icons-kit";
import { x } from "react-icons-kit/feather/x";
// import BellImage from '';
import ContactForm from "components/ContactFormTwo/ContactForm";
import {
  SubscribeWrapper,
  SubscribeImage,
  ModalStyle,
  Close,
  NewsletterForm,
} from "./SubscribeModal.style";

const SubscribeModal = (props) => {
  console.log(props.closeHandler);
  return (
    <>
      <ModalStyle></ModalStyle>
      <SubscribeWrapper className="subscribe-wrapper">
        <Close
          type="submit"
          aria-label="close"
        >
          <Icon
            icon={x}
            size={33}
            onClick={props.closeHandler}
          />
        </Close>
        <SubscribeImage>
          <img
            src="common/static/images/bell.png"
            alt="bell"
          ></img>
        </SubscribeImage>
        <h2>
          <FormattedMessage id="newsletterTitle" />
        </h2>
        <p>
          <FormattedMessage id="newsletterText" />
        </p>
        <NewsletterForm>
          <ContactForm />
        </NewsletterForm>
      </SubscribeWrapper>
    </>
  );
};

export default SubscribeModal;

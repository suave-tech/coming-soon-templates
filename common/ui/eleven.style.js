import styled from 'styled-components';

export const LogoImageContainer = styled.div`
  text-align: center;
  padding-top: 40px;
  @media (max-width: 1600px) {
    padding-top: 30px;
  }
  img {
    margin: 0;
  }
`;
const MainWrapper = styled.section`
  background: #fff;
  position: relative;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const ParticleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  particle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
`;
export const NormalClockWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 1440px) {
    margin-bottom: 70px;
  }
  @media (max-width: 1199px) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 55px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
    width: 100%;
  }
  .NormalClock {
    width: 550px;
    @media (max-width: 600px) {
      width: 100%;
    }
    .NormalUnitContainer {
      background: transparent;
      @media (max-width: 600px) {
        width: 100px;
      }
      @media (max-width: 420px) {
        width: 80px;
      }
      .NormalupperCard {
        span {
          font-size: 60px;
          font-family: 'DM Sans';
          color: #000;
          font-weight: 700;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormallowerCard {
        span {
          font-size: 60px;
          font-family: 'DM Sans';
          color: #000;
          font-weight: 700;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormalCard {
        span {
          font-size: 60px;
          font-family: 'DM Sans';
          color: #000;
          font-weight: 700;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .digitLabel {
        font-size: 14px;
        font-family: 'DM Sans';
        color: rgb(0, 0, 0);
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        @media (max-width: 1440px) {
          margin-top: 5px;
        }
        @media (max-width: 600px) {
          letter-spacing: 1px;
        }
        @media (max-width: 420px) {
          font-size: 12px;
        }
      }
    }
  }
`;
export const MainContentSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 60px 0;
  width: 100%;
  @media (max-width: 1199px) {
    flex-direction: column;
  }
  @media (max-width: 1099px) {
    height: 100%;
    min-height: 65vh;
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  margin-left: 120px;
  @media (max-width: 1199px) {
    width: 100%;
    margin-left: 0px;
    align-items: center;
  }
  p {
    font-size: 18px;
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 700;
    line-height: 33px;
    position: relative;
    padding-left: 70px;
    @media (max-width: 600px) {
      font-size: 14px;
      padding-left: 50px;
      line-height: 26px;
    }
    &::before {
      content: '';
      display: block;
      border-top: 2px solid rgb(0, 0, 0);
      width: 48px;
      position: absolute;
      left: 0;
      top: 16px;
      @media (max-width: 600px) {
        width: 36px;
        top: 12px;
      }
    }
    @media (max-width: 480px) {
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 48px;
    font-family: 'DM Sans';
    color: #000;
    line-height: 1.35;
    text-align: left;
    max-width: 520px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 30px;
    @media (max-width: 1440px) {
      font-size: 36px;
      max-width: 570px;
      margin-bottom: 25px;
    }
    @media (max-width: 1199px) {
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      max-width: 100%;
    }
  }
`;
export const ContactFormWrap = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 15px;
    z-index: 2;
    @media (max-width: 1440px) {
      margin-top: 15px;
      flex-direction: column;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }

    @media (max-width: 575px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 25px;
      button {
        width: 100%;
      }
    }
    .field-wrapper {
      width: 100%;
      @media (max-width: 600px) {
        width: 100%;
      }
      input {
        background-color: transparent;
        border: 2px solid #000;
        height: 48px;
        border-radius: 5px;
        width: 420px;
        @media (max-width: 1440px) {
          width: 310px;
        }
        @media (max-width: 1199px) {
          text-align: center;
          width: 100%;
        }
        &::placeholder {
          font-size: 15px;
          font-family: 'Roboto';
          color: rgb(0, 0, 0);
        }
        &:focus {
          outline: none;
        }
      }
    }
    button {
      font-size: 18px;
      font-family: 'DM Sans';
      color: rgb(0, 0, 0);
      font-weight: 700;
      line-height: 33px;
      position: relative;
      background: transparent;
      transition: all 0.2s ease-in-out;
      position: relative;
      padding-left: 0;
      padding-right: 0;
      justify-content: flex-start;
      width: fit-content;
      min-width: 95px;
      height: 51px;
      padding-left: 0;
      padding-right: 0;
      margin-left: 0;
      margin-right: 0;
      margin-top: 15px;
      margin-bottom: 0;
      @media (max-width: 1199px) {
        min-width: 100%;
        justify-content: center;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.75s;
        opacity: 0;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.75s;
        opacity: 1;
        left: 0;
        background-color: #000;
      }
      span.btn-text {
        padding-left: 0;
        padding-right: 0;
      }
      &:hover {
        box-shadow: none;
        background: transparent;
      }
    }
  }
  .feedback {
    left: 0%;
    bottom: -120px;
  }
`;

export const NotifyButton = styled.div`
  padding-top: 50px;
  @media (max-width: 1440px) {
    padding-top: 15px;
  }
  @media (max-width: 600px) {
    padding-top: 0px;
  }
  button {
    font-size: 18px;
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 700;
    line-height: 33px;
    position: relative;
    background: transparent;
    transition: all 0.2s ease-in-out;
    position: relative;
    padding-left: 0;
    padding-right: 0;
    @media (max-width: 480px) {
      font-size: 16px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      width: 0px;
      height: 2px;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.75s;
      opacity: 0;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      width: 0px;
      height: 2px;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.75s;
      opacity: 0;
      left: 0;
      background-color: #000;
    }
    &:hover {
      &::before {
        width: 100%;
        opacity: 1;
      }
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
    span.btn-text {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
export const FooterSection = styled.div`
  position: relative;
  padding-bottom: 40px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: #e5e5e5;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s ease;

      a {
        color: #000;
        font-size: 17px;
      }
      &:hover {
        background-color: #000;
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 15px;
    font-size: 14px;
    font-family: 'Roboto';
    color: rgb(142, 147, 154);
    line-height: 2.357;
    text-align: center;
    margin-bottom: 0;
  }
`;
export default MainWrapper;

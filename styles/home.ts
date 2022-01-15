import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BannerSection = styled.section`
  width: 100%;
  height: 65vh;
  padding: 0 16px 180px;
  display: flex;
  color: #ffffff;
  margin-top: 100px;
  position: relative;
  z-index: 500;

  @media (max-width: 1000px) {
    background: #260570;
  }
  @media (min-width: 1000px) {
    padding: 0 64px 160px;
    height: auto;
    background-image: url('images/banner-hotel.jpg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 80px;
    /* background: #ffffff; */

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background-color: rgba(0,0,0,0.5);
    }
  }

  .content-block-text {
    width: 100%;
    max-width: 480px;
    margin-top: 24px;
    z-index: 200;
    text-align: center;
    
    @media (min-width: 1000px) {
      margin-top: 80px;
      text-align: left;
    }

    &__title {
      font-size: 24px;
      color: #ffffff;
      width: 100%;
      max-width: 430px;
      margin-bottom: 16px;
      
      @media (min-width: 1000px) {
        font-size: 54px;
        line-height: 120%;
      }
    }
    &__description {
      width: 100%;
      max-width: 340px;
      font-size: 12px;

      @media (min-width: 1000px) {
        font-size: 18px;
      }
    }
  }
  .content-inputs {
    width: 100%;
    height: fit-content;
    background: #260570;
    border-radius: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 16px;

    @media (min-width: 1000px) {
      width: fit-content;
      min-width: 500px;
      max-width: 900px;
      height: 100px;
      flex-direction: row;
      left: 64px;
      bottom: 32px;
      transform: none;
    }

    &__box {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 7px;
      position: relative;
      
      @media (min-width: 1000px) {
        & + .content-inputs__box {
          margin-left: 16px;
        }
      }
      
      &.small {
        width: 100%;

        @media (min-width: 1000px) {
          max-width: 120px;
        }
        
        .box-item {
          margin-top: 16px;
          
          @media (min-width: 1000px) {
            margin-top: 0;
          }
        }

      }
      
      @media (min-width: 1000px) {
        width: auto;
        flex-direction: row;
        background: #ffffff;
        height: 60px;
      }

      .content-icon {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        display: none;
        align-items: center;
        justify-content: center;
        border: 1px solid #5a5e5f;
        border-radius: 3px;

        @media (min-width: 1000px) {
         display: flex;
        }
      }

      .box-item {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        padding: 0 24px;
        background: #ffffff;
        border-radius: 8px;

        & + .box-item {
          margin-top: 16px;
        }
        
        @media (min-width: 1000px) {
          background: none;
          border-radius: 0;
          height: 100%;

          & + .box-item {
            border-left: 3px solid #d9d9d9;
            margin-top: 0;
          }
        }

        label {
          font-size: 10px;
          margin-top: 8px;
          text-transform: uppercase;
          color: #5a5e5f;
        }
        
        .box-input {
          display: flex;
          align-items: center;
          height: 40px;
          display: flex;

          @media (min-width: 1000px) {
            height: auto;
            margin-top: 8px;
          }

          svg {
            margin-right: 8px;
          }
          input {
            width: 100%;
            border: none;
            background: transparent;

            &:focus, &:active {
              outline: 0;
            } 
          }
        }
      }
    }

    &__btn-search {
      width: 100%;
      height: 60px;
      background: #fa503f;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      text-transform: uppercase;
      color: #ffffff;
      margin-top: 32px;
      
      @media (min-width: 1000px) {
        width: 150px;
        margin-left: 16px;
        margin-top: 0;
      }

      svg {
        margin-right: 8px;
      }
    }
  }

  .banner-hotel {
    width: 100%;
    max-width: 590px;
    position: absolute;
    right: 0;
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 0 16px;

  @media (min-width: 1000px) {
    max-width: 1280px;
    padding: 0 64px;
  }

  .content-title {
    width: 100%;
    max-width: 280px;
    font-size: 32px;
    text-align: center;
    color: #394140;
    margin: 24px auto 40px;

    @media (min-width: 1000px) {
      max-width: 420px;
      font-size: 48px;
      text-align: left;
      margin: 24px 0 40px;
    }
  }
  .collections-hotel {
    width: 100%;
    display: flex;
      justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 56px 16px;

    @media (min-width: 1000px) {
      justify-content: flex-start;
    }

  }
`;
export const Footer = styled.footer`
  
`;


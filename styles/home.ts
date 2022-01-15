import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.header`
  display: none;
  z-index: 900;

  @media (min-width: 1000px) {
    width: 100%;
    height: 80px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    background: #f7f8fa;
    color: #5a5e5f;

    .header-logo {
      font-size: 36px;
      color: #2f3837;
      font-weight: 400;

      strong {
        font-weight: 700;
      }
    }
    .header-list {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 32px;
      transform: translateX(60px);
    }
  }
`;

export const HeaderMob = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: #f7f8fa;
  color: #5a5e5f;

  @media (min-width: 1000px) {
    display: none;
  }

  .headermob-content {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: -110%;
    z-index: 900;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 370ms;

    &.showMenu {
      left: 0;
    }

    svg {
      position: absolute;
      right: 16px;
      top: 16px;
    }

    .headermob-list {
      list-style: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 32px;

      li {
        font-size: 28px;
      }
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 55vh;
  padding: 0 64px 160px;
  display: flex;
  background: #260570;
  color: #ffffff;
  margin-top: 100px;
  position: relative;
  z-index: 500;

  @media (min-width: 1000px) {
    height: auto;
    background-image: url('images/banner-hotel.jpg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background: transparent;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background-color: rgba(0,0,0,0.5);
    }
  }

  @media (min-width: 1000px) {
    margin-top: 80px;
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
    bottom: 0;

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
        max-width: 120px;
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

export const Footer = styled.div`
  
`;


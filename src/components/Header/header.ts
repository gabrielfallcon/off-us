import styled from 'styled-components';

export const HeaderContent = styled.header`
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

export const HeaderMobContent = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: #f7f8fa;
  color: #5a5e5f;
  z-index: 900;

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
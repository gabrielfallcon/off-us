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


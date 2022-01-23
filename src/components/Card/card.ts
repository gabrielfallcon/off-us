import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  max-width: 290px;
  height: fit-content;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 -18px 35px rgb(68 68 68 / 20%);

  @media (min-width: 1000px) {
    max-width: 270px;
  }

  .flag-discount {
    padding: 4px 8px;
    background: #fa503f;
    position: absolute;
    top: calc(16px + 8px);
    right: calc(16px + 8px);
    z-index: 600;
    
    span {
      font-size: 10px;
      font-weight: 600;
      color: #ffffff;
    }
  }
  .img-card {
    width: 100% !important;
    margin-bottom: 24px;
    box-shadow: 0 19px 16px rgba(68, 68, 68, .2);

    inset: none !important;
    margin: none !important; 
    display: flex !important;
    min-width: auto !important;
    max-width: auto !important;
    min-height: auto !important;
    max-height: auto !important;
  }
  .content-info {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 18px;
      color: #5e6363;
      margin-bottom: 8px;
    }
    &__description {
      font-size: 12px;
      color: #c9ced6;
      margin-bottom: 16px;
    }
    &__accommodation {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 16px;

      .accommodation-item {
        width: 100%;
        max-width: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #fbfbfb;
        padding: 8px;
        border-radius: 5px;

        svg {
          margin-right: 8px;
        }
        span {
          font-size: 10px;
          color: #c9ced6;
        }
      }
    }
  }
  .content-price {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      font-size: 28px;
      font-weight: 600;
      color: #a6a9a9;
      letter-spacing: 0.02em;

      span {
        font-size: 12px;
        color: #c9ced6;
      }
    }
    .btn-view {
      width: 100%;
      max-width: 120px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      font-size: 10px;
      font-weight: 600;
      color: #fa503f;
      background: rgba(250, 80, 63, .2);
      border-radius: 5px;
    }
  }
`;
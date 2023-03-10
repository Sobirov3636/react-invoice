import styled from "styled-components";

export const ViewInvoiceComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  .go-back {
    &__btn {
      cursor: pointer;
      border: none;
      background-color: transparent;
      background-repeat: no-repeat;
      font-weight: 700;
      margin-left: 2rem;
    }
  }
`;

export const InvoiceStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.6rem 0;
  background-color: #fff;
  padding: 2.5rem 3rem;
  border-radius: 1rem;

  .status-box {
    display: flex;
    align-items: center;

    &__text {
      margin-right: 4rem;
      color: #858bb2;
      font-size: 1.2rem;
    }
  }

  .status__type {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    cursor: pointer;
    &-dot {
      background-color: red;
      height: 0.7rem;
      width: 0.7rem;
      border: none;
      border-radius: 10rem;
    }
  }
  .paid {
    color: #33d69f;
    background-color: #e8fbf5;
    padding: 1rem 4rem;
    border: none;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
    &-dot {
      background-color: #33d69f;
    }
  }

  .pending {
    color: #ff8f00;
    background-color: #efe2d1;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
    &-dot {
      background-color: #ff8f00;
    }
  }

  .draft {
    color: #373b53;
    background-color: #f4f5f9;
    padding: 1rem 4rem;
    border: none;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
    &-dot {
      background-color: #373b53;
    }
  }
`;

export const InvoiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  padding: 4rem;
  margin-bottom: 10rem;

  .data-content-box1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .id-box {
    &__id {
      font-family: inherit;
      font-size: 1.6rem;
      font-weight: 700;
      color: #0c0e16;
      &--span {
        color: #888eb0;
      }
    }
    &__type {
      font-family: inherit;
      font-size: 1.2rem;
      font-weight: inherit;
      color: #858bb2;
    }
  }

  .location-box {
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: inherit;
    color: #858bb2;
    line-height: 1.4;
  }

  .data-content-box2 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-box {
      margin-top: 3rem;
      font-family: inherit;
      font-size: 1.2rem;
      font-weight: 500;
      display: flex;
      flex-direction: column;

      &__text1 {
        color: #858bb2;
      }
      &__invoicedate {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0c0e16;
      }
      &__text2 {
        color: #858bb2;
        margin-top: 2rem;
      }
      &__paymentdate {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0c0e16;
      }
    }

    .bill-info-box {
      display: flex;
      flex-direction: column;
      margin-top: 4rem;
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: inherit;
      color: #858bb2;

      &__name {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0c0e16;
      }
    }

    .sent-info-box {
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;
      font-family: inherit;
      font-size: 1.2rem;
      font-weight: inherit;
      color: #858bb2;

      &__mail {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0c0e16;
      }
    }
  }

  .total-amount-box {
    display: flex;

    flex-direction: column;
    background-color: #f9fafe;
    padding: 2rem 3rem;

    margin-top: 2rem;
    border-radius: 1rem;

    .product-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;

      .item-data {
        display: flex;
        align-items: center;
        grid-column: 1 / 1;
        justify-content: space-between;
        color: #858bb2;
        font-size: 1.1rem;
      }
    }

    .item-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 700;
      font-size: 1.2rem;

      &__item {
        color: #0c0e16;
      }

      &__numofqty {
        color: #858bb2;
      }

      &__priceamount {
        color: #858bb2;
      }

      &__totalamount {
        color: #0c0e16;
      }
    }
  }
  .amount-info {
    // width: auto;
    padding: 2rem 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #373b53;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    &__text {
      font-size: 1.1rem;
    }

    &__total {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;

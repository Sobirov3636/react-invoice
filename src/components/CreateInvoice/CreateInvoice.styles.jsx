import styled from "styled-components";

export const CreateInvoiceComponent = styled.div`
  height: 100vh;
  max-width: 72rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  z-index: 10;
  position: absolute;
  left: 10rem;

  h2 {
    margin-left: 5.6rem;
    font-size: 3.2rem;
    font-weight: 700;
    color: #0c0e16;
    margin-top: 5.6rem;
  }

  form {
    margin: 4.8rem 5.6rem 3.2rem 5.6rem;
    overflow-y: scroll;
  }

  label {
    display: block;
    color: #7e88c3;
    font-size: 1.2rem;
    font-weight: 500;
  }
  input {
    color: #0c0e16;
    font-size: 1.2rem;
    font-weight: 700;
    border: 1px solid #1e2139;
    border-radius: 0.5rem;
    padding: 1.7rem 0;
    outline: none;
  }

  .bill-from {
    color: #7c5dfa;

    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 2.4rem;
  }

  .street-address {
    width: 100%;
  }
  .address-box {
    display: flex;
    justify-content: space-between;
    column-gap: 2.4rem;
    margin: 2.4rem 0;
  }

  .bill-to {
    color: #7c5dfa;

    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 2.4rem;
  }

  .client-name {
    width: 100%;
    margin-bottom: 2.4rem;
  }

  .client-email {
    width: 100%;
    margin-bottom: 2.4rem;
  }

  .client-address {
    width: 100%;
    margin-bottom: 2.4rem;
  }

  .date-box {
    width: 100%;
    display: flex;
    column-gap: 2.4rem;

    .invoice-date-box {
      width: 50%;
      margin-bottom: 2.4rem;

      .invoice-date {
        width: 100%;
        cursor: pointer;
      }
    }

    .payment-box {
      width: 50%;

      .invoice-payment {
        width: 100%;
        color: #0c0e16;
        font-size: 1.2rem;
        font-weight: 700;
        border: 1px solid #1e2139;
        border-radius: 0.5rem;
        padding: 1.7rem 0;
        outline: none;
      }
    }
  }

  .project-description {
    width: 100%;
    margin-bottom: 2.4rem;
  }

  .item-list {
    font-size: 1.8rem;
    font-weight: 700;
    color: #777f98;
  }

  .list-item-box {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr 1fr 1fr;
    font-weight: 500;
    font-size: 1.2rem;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.8rem;

    .item-name {
      grid-column: 1/1;
      color: #7e88c3;
    }

    .item-qty {
      grid-column: 2/2;
      color: #7e88c3;
    }

    .item-price {
      grid-column: 3/3;
      color: #7e88c3;
    }

    .item-total {
      grid-column: 4/4;
      color: #7e88c3;
    }

    .first-item {
      grid-column: 1/1;
      font-weight: 700;
      border: 1px solid #1e2139;
      border-radius: 0.5rem;

      padding: 1.7rem 2rem;
    }

    .first-item-qty {
      grid-column: 2/2;
      grid-row: 2/2;
      color: #7e88c3;
      border: 1px solid #1e2139;
      border-radius: 0.5rem;

      padding: 1.7rem 2rem;
    }

    .first-item-price {
      grid-column: 3/3;
      grid-row: 2/2;
      color: #7e88c3;
      border: 1px solid #1e2139;
      border-radius: 0.5rem;

      padding: 1.7rem 2rem;
    }

    .first-item-total {
      grid-column: 4/4;
      grid-row: 2/2;
      color: #7e88c3;
    }

    .delete-img1 {
      grid-column: 5/5;
      align-self: center;
    }

    .second-item {
      grid-column: 1/1;
      font-weight: 700;
      border: 1px solid #1e2139;
      border-radius: 0.5rem;

      padding: 1.7rem 2rem;
    }

    .second-item-qty {
      grid-column: 2/2;

      color: #7e88c3;
      border: 1px solid #1e2139;
      border-radius: 0.5rem;

      padding: 1.7rem 2rem;
    }

    .second-item-price {
      grid-column: 3/3;
      color: #7e88c3;
      border: 1px solid #1e2139;
      border-radius: 0.5rem;

      padding: 1.7rem 2rem;
    }

    .second-item-total {
      grid-column: 4/4;

      color: #7e88c3;
    }

    .delete-img1 {
      grid-column: 5/5;
      cursor: pointer;
    }
  }

  .add-new-item {
    width: 100%;
    align-items: center;
    background-color: #f9fafe;
    color: #7e88c3;
    border: none;
    border-radius: 10rem;
    padding: 1.7rem 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 3.9rem;
    cursor: pointer;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkInvoiceListItemContent = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 7.2rem;
  border: none;
  border-radius: 1rem;
  padding: 0 2rem;
  font-family: inherit;
  font-weight: inherit;
  font-size: 1.2rem;
  cursor: pointer;

  p {
    font-weight: 700;
    color: #7e88c3;

    span {
      color: #0c0e16;
    }
  }

  .content-date {
    color: #7e88c3;
  }
  .content-name {
    color: #858bb2;
  }
  .content-amount {
    font-weight: 700;
    font-size: 1.6rem;
    color: #0c0e16;
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
    &-dot {
      background-color: #373b53;
    }
  }
`;

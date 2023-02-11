import styled from "styled-components";

export const HeaderComponent = styled.div`
  display: flex;
  height: 15rem;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
`;

export const HeaderBox = styled.div`
  display: flex;

  h1 {
    font-family: inherit;
    font-weight: 700;
    font-size: 3.2rem;

    color: #0c0e16;
  }

  span {
    display: block;
    font-size: 1.2rem;
    color: #888eb0;
  }
`;

export const HeaderBox2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: inherit;
    font-weight: 700;
    font-size: 1.2rem;
    color: #0c0e16;
    margin-right: 3rem;
  }

  img {
    margin: 0 1.2rem;
  }
`;

export const HeaderBox2Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  background-color: #7c5dfa;
  height: 4.8rem;
  width: 15rem;
  padding-right: 0.8rem;
  border: none;
  border-radius: 10rem;
  cursor: pointer;

  img {
    background-color: #fff;
    margin-right: 2rem;
    padding: 1rem;
    border-radius: 10rem;
  }
`;

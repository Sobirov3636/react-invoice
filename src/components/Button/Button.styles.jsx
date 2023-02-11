import styled from "styled-components";

export const ViewInvoiceButtonBox = styled.div`
  display: flex;
`;

export const CreateInvoiceButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 1rem 5.6rem;
`;

export const CreateInvoiceSaveCancelBtnBox = styled(CreateInvoiceButtonsBox)`
  justify-content: flex-end;
`;

export const BaseButton = styled.button`
  border: none;
  border-radius: 10rem;
  padding: 1.7rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: #fff;
  color: #000;
  cursor: pointer;
`;
export const DefaultButton = styled(BaseButton)`
  background-color: #7c5dfa;
  color: #fff;
`;

export const EditCancelDiscardButton = styled(BaseButton)`
  background-color: #f9fafe;
  color: #7e88c3;
  margin-right: 1rem;
`;

export const DeleteButton = styled(BaseButton)`
  color: #fff;
  background-color: #ec5757;
  margin: 0 2rem;
`;

export const DraftButton = styled(BaseButton)`
  background-color: #373b53;
  color: #888eb0;
  margin-right: 1rem;
`;

import illustrationEmpty from "../../assets/illustration-empty.svg";
import { EmptyPageList } from "./EmptyList.styles";

const EpmtyList = () => {
  return (
    <EmptyPageList>
      <img src={illustrationEmpty} alt='icon' />
      <h3>There is nothing here</h3>
      <p>
        &nbsp; Create an invoice by clicking the <br />
        <span>New Invoice</span> button and get started
      </p>
    </EmptyPageList>
  );
};

export default EpmtyList;

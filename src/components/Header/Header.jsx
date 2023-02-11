import plus from "../../assets/icon-plus.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";
import { HeaderBox, HeaderBox2, HeaderBox2Button, HeaderComponent } from "./Header.styles";
import { useContext } from "react";
import { FormContext } from "../../context/formContext";

const Header = () => {
  const { setIsFormOpen } = useContext(FormContext);

  const handleClick = () => {
    setIsFormOpen(true);
  };

  return (
    <HeaderComponent>
      <HeaderBox>
        <h1>
          Invoices <span>There are 7 total invoices</span>
          <span>No invoices</span>
        </h1>
      </HeaderBox>

      <HeaderBox2>
        <p>
          Filter by status <img src={arrowDown} alt='icon' />
        </p>

        <HeaderBox2Button onClick={handleClick}>
          <img src={plus} alt='' /> New Invoice
        </HeaderBox2Button>
      </HeaderBox2>
    </HeaderComponent>
  );
};

export default Header;

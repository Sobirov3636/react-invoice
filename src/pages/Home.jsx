import Header from "../components/Header/Header";
import InvoiceList from "../components/InvoiceList/InvoiceList";
import { ContainerBox2 } from "./Home.styles";
import ViewInvoice from "./ViewInvoice/ViewInvoice";

const Home = () => {
  return (
    <ContainerBox2>
      <Header />
      <InvoiceList />
    </ContainerBox2>
  );
};

export default Home;

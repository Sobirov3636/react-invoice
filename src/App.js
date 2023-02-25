import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateInvoice from "./components/CreateInvoice/CreateInvoice";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ViewInvoice from "./pages/ViewInvoice/ViewInvoice";

import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Sidebar />}>
        <Route path='/auth' element={<Auth />} />
        <Route index element={<Home />} />
        <Route path='/:invoiceId' element={<ViewInvoice />} />
      </Route>
    </Routes>
  );
}

export default App;

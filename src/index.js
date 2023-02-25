import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { InvoicesProvider } from "./context/invoicesContext";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./context/formContext";
import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <InvoicesProvider>
    <BrowserRouter>
      <FormProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </FormProvider>
    </BrowserRouter>
  </InvoicesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

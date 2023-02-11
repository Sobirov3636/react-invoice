import { async } from "@firebase/util";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getInvoicesAndDocuments } from "../utils/firebase/firebase.utils";

export const InvoicesContext = createContext({
  invoicesMap: {},
});

export const InvoicesProvider = ({ children }) => {
  const [invoicesMap, setInvoicesMap] = useState({});

  useEffect(() => {
    (async function () {
      const invoicesMap = await getInvoicesAndDocuments();
      setInvoicesMap(invoicesMap);
    })();
  }, []);

  const value = { invoicesMap };

  return <InvoicesContext.Provider value={value}> {children}</InvoicesContext.Provider>;
};

import { useContext } from "react";
import { useEffect, useState } from "react";
import arrowRight from "../../assets/icon-arrow-right.svg";
import { InvoicesContext } from "../../context/invoicesContext";

import InvoiceListItem from "../InvoiceListItem/InvoiceListItem";
import EpmtyList from "./EpmtyList";
import { InvoiceListMain } from "./InvoiceList.styles";

const InvoiceList = () => {
  const { invoicesMap } = useContext(InvoicesContext);

  return (
    <InvoiceListMain>
      {Object.keys(invoicesMap).length ? (
        Object.keys(invoicesMap).map((invoice) => {
          const { paymentDue, id, clientName, status, total } = invoicesMap[invoice];

          return (
            <InvoiceListItem
              key={id}
              paymentDue={paymentDue}
              id={id}
              clientName={clientName}
              status={status}
              total={total}
            />
          );
        })
      ) : (
        <EpmtyList />
      )}
    </InvoiceListMain>
  );
};

export default InvoiceList;

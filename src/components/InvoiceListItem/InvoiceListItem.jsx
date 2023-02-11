import arrowRight from "../../assets/icon-arrow-right.svg";
import { LinkInvoiceListItemContent } from "./InvoiceListItem.styles";

const InvoiceListItem = ({ paymentDue, id, clientName, status, total }) => {
  return (
    <LinkInvoiceListItemContent to={`/${id}`}>
      <p>
        # <span>{id}</span>
      </p>
      <div className='content-date'>{paymentDue}</div>
      <div className='content-name'>{clientName}</div>
      <div className='content-amount'>{total}</div>
      <div className={`status__type ${status}`}>
        <div className={`status__type-dot ${status}-dot`}></div>
        {status}
      </div>
      <div className='content__icon'>
        <img src={arrowRight} alt='icon' />
      </div>
    </LinkInvoiceListItemContent>
  );
};

export default InvoiceListItem;

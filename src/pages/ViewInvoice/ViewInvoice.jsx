import IconArrowLeft from "../../assets/icon-arrow-left.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getInvoiceDoc } from "../../utils/firebase/firebase.utils";
import { ViewInvoiceButtonBox } from "../../components/Button/Button.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { InvoiceInfo, InvoiceStatus, ViewInvoiceComponent } from "./ViewInvoice.styles";
import { ContainerBox2 } from "../Home.styles";

const ViewInvoice = () => {
  const [invoice, setInvoice] = useState(null);
  const { invoiceId } = useParams();

  useEffect(() => {
    (async () => {
      setInvoice(await getInvoiceDoc(invoiceId));
    })();
  }, [invoiceId]);

  if (invoice === null) return <h1>Loading...</h1>;
  const { items } = invoice;
  console.log(items);
  return (
    <ContainerBox2>
      <ViewInvoiceComponent>
        <Link to='/' className='go-back'>
          <div className='go-back__icon'>
            <img src={IconArrowLeft} alt='icon' />
            <button className='go-back__btn'>Go back</button>
          </div>
        </Link>

        <InvoiceStatus>
          <div className='status-box'>
            <div className='status-box__text'>Status</div>
            <div className={`status__type ${invoice.status} `}>
              <div className={`status__type-dot ${invoice.status}-dot`}></div>
              {invoice.status}
            </div>
          </div>

          <ViewInvoiceButtonBox>
            <Button buttonType={"editCancelBtn"}>Edit</Button>
            <Button buttonType={"deleteBtn"}>Delete</Button>
            <Button buttonType={"defaultBtn"}>Mark as Paid</Button>
          </ViewInvoiceButtonBox>

          {/* <div className='delete-propmt'>
          <p className='confirm-deletion'>Confirm Deletion</p>
          <p className='text'>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
          <div className='button-box'>
          <button className='button-box__cancel'>Cancel</button>
          <button className='button-box__delete'>Delete</button>
          </div>
        </div> */}
        </InvoiceStatus>

        <InvoiceInfo>
          <div className='data-content-box1'>
            <div className='id-box'>
              <div className='id-box__id'>
                <span className='id-box__id--span'>#</span> {invoice.id}
              </div>
              <div className='id-box__type'>{invoice.description}</div>
            </div>

            <div className='location-box'>
              <p className='location-box__home'>{invoice.senderAddress.street}</p>
              <p className='location-box__city'>{invoice.senderAddress.city}</p>
              <p className='location-box__code'>{invoice.senderAddress.postCode}</p>
              <p className='location-box__country'>{invoice.senderAddress.country}</p>
            </div>
          </div>

          <div className='data-content-box2'>
            <div className='info-box'>
              <p className='info-box__text1'>Invoice Data</p>
              <p className='info-box__invoicedate'>{invoice.createdAt}</p>
              <p className='info-box__text2'>Payment Data</p>
              <p className='info-box__paymentdate'>{invoice.paymentDue}</p>
            </div>

            <div className='bill-info-box'>
              <p className='bill-info-box__text'>Bill To</p>
              <p className='bill-info-box__name'>{invoice.clientName}</p>
              <p className='bill-info-box__street'>{invoice.clientAddress.street}</p>
              <p className='bill-info-box__city'>{invoice.clientAddress.city}</p>
              <p className='bill-info-box__code'>{invoice.clientAddress.postCode}</p>
              <p className='bill-info-box__country'>{invoice.clientAddress.country}</p>
            </div>

            <div className='sent-info-box'>
              <div className='sent-info-box__text'>Sent to</div>
              <div className='sent-info-box__mail'>{invoice.clientEmail}</div>
            </div>
          </div>
          <div className='total-amount-box'>
            <div className='product-data'>
              <div className='item-data'>
                <p className='item-data__name'>Item Name</p>
                <p className='item-data__quantity'>QTY.</p>
                <p className='item-data__price'>Price</p>
                <p className='item-data__total'>Total</p>
              </div>

              {items.map((item) => {
                return (
                  <div className='item-info'>
                    <p className='item-info__item'>{[item.name]}</p>
                    <p className='item-info__numofqty'>{[item.quantity]}</p>
                    <p className='item-info__priceamount'>£{[item.price]}</p>
                    <p className='item-info__totalamount'>£{[item.total]}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='amount-info'>
            <p className='amount-info__text'>Amount Due</p>
            <p className='amount-info__total'>£{invoice.total}</p>
          </div>
        </InvoiceInfo>
      </ViewInvoiceComponent>
    </ContainerBox2>
  );
};

export default ViewInvoice;

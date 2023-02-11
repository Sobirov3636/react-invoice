import { useContext } from "react";
import deleteIcon from "../../assets/icon-delete.svg";
import { FormContext } from "../../context/formContext";
import Button from "../../components/Button/Button";
import { CreateInvoiceComponent, FormContainer } from "./CreateInvoice.styles";
import { CreateInvoiceButtonsBox, CreateInvoiceSaveCancelBtnBox } from "../Button/Button.styles";

const CreateInvoice = () => {
  const { setIsFormOpen } = useContext(FormContext);

  const handleClick = () => {
    setIsFormOpen(false);
  };
  return (
    <CreateInvoiceComponent>
      <h2>New Invoice</h2>
      <form>
        <p className='bill-from'>Bill From</p>
        <label htmlFor='steet'>Street Address</label>
        <input type='text' id='steet' className='street-address' />
        <div className='address-box'>
          <div>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' className='city' />
          </div>

          <div>
            <label htmlFor='postcode'>Post Code</label>
            <input type='text' id='postcode' className='city' />
          </div>

          <div>
            <label htmlFor='country'>Country</label>
            <input type='text' id='country' className='city' />
          </div>
        </div>

        <p className='bill-to'>Bill To</p>

        <div>
          <label htmlFor='Name'>Client's Name</label>
          <input type='text' id='Name' className='client-name' />
        </div>

        <div>
          <label htmlFor='clientEmail'>Client's Email</label>
          <input type='text' id='clientEmail' className='client-email' />
        </div>

        <div>
          <label htmlFor='streetAddress'>Street Address</label>
          <input type='text' id='streetAddress' className='client-address' />
        </div>

        <div className='address-box'>
          <div>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' className='city' />
          </div>

          <div>
            <label htmlFor='postcode'>Post Code</label>
            <input type='text' id='postcode' className='city' />
          </div>

          <div>
            <label htmlFor='country'>Country</label>
            <input type='text' id='country' className='city' />
          </div>
        </div>

        <div className='date-box'>
          <div className='invoice-date-box'>
            <label htmlFor='invoiceDate'>Invoice Date</label>
            <input type='date' id='invoiceDate' className='invoice-date' />
          </div>
          <div className='payment-box'>
            <label htmlFor='paymentTerms'>Payment Terms</label>
            <select id='paymentTerms' className='invoice-payment'>
              <option value='day'>Net 30 Days</option>
              <option value='day'>Net 29 Days</option>
              <option value='day'>Net 28 Days</option>
              <option value='day'>Net 27 Days</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor='projectDescription'>Project Description</label>
          <input type='text' id='projectDescription' className='project-description' />
        </div>

        <p className='item-list'>Item List</p>

        <div className='list-item-box'>
          <div className='item-name'>Item Name</div>
          <div className='item-qty'>Qty.</div>
          <div className='item-price'>Price</div>
          <div className='item-total'>Total</div>
          <div className='first-item'>Banner Design</div>
          <div className='first-item-qty'>1</div>
          <div className='first-item-price'>156.00</div>
          <div className='first-item-total'>156.00</div>
          <img src={deleteIcon} alt='delete' className='delete-img1' />

          <div className='second-item'>Banner Design</div>
          <div className='second-item-qty'>1</div>
          <div className='second-item-price'>156.00</div>
          <div className='second-item-total'>156.00</div>
          <img src={deleteIcon} alt='delete' className='delete-img2' />
        </div>

        <button className='add-new-item'>+ Add New Item</button>
      </form>
      <CreateInvoiceButtonsBox>
        <Button buttonType={"editCancelBtn"}>Discard</Button>

        <CreateInvoiceSaveCancelBtnBox>
          <Button buttonType={"saveDraftBtn"}>Save as Draft</Button>
          <Button buttonType={"defaultBtn"}>Save & Send</Button>
        </CreateInvoiceSaveCancelBtnBox>
      </CreateInvoiceButtonsBox>
      {/* <div className='cancel-save-buttons'>
        <Button buttonType={"editCancelBtn"} onClick={handleClick}>
          Cancel
        </Button>
        <Button buttonType={"defaultBtn"}>Save Changes</Button>
      </div> */}
    </CreateInvoiceComponent>
  );
};

export default CreateInvoice;

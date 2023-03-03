import React, { useState, useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import importIcon from "../../assest/import.png";
// CONTEXT
import { PaymentContext } from "../../context/paymentData";
import { CompanyServiceList } from "../../context/companyData";
// Styles
import "./popUpStyles/payment.css";

function PaymentComponent() {
  // CONTEXT
  const { singleBooking } = useContext(CompanyServiceList);
  const { formValues, setFormValues } = useContext(PaymentContext);
  // STATES
  const [page, setPage] = useState(1);
  const [paymentReceipt, setPaymentReceipt] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  function backBtn() {
    setPage(() => {
      if (page === 1) {
        return 1;
      }
      return page - 1;
    });
  }
  function nextBtn() {
    setPage(page + 1);
  }
  function dataCollection() {
    new Promise((resolve) => {
      console.log("ACTION DETECTED");
      // localStorage.setItem("name", formValues.name);
      // localStorage.setItem("email", formValues.email);
      // localStorage.setItem("address", formValues.address);
      // localStorage.setItem("sender", formValues.sender);
      // localStorage.setItem("phone", formValues.phone);
      // localStorage.setItem("type", formValues.type);
      // localStorage.setItem("date", formValues.date);
      // localStorage.setItem("date", formValues.date);
      // localStorage.setItem("time", formValues.time);
      // localStorage.setItem("service", singleBooking?.companyName);
      resolve();
    }).then(() => {
      nextBtn();
    });
  }


  function progressBtn() {
    return (
      <>
        <div className="progressButton">
          {page === 4 ? (
            <div className="paymentNavigationBtn">
              <button
                type="submit"
                className="nextBtn submitBtn"
                onSubmit={console.log("hello")}>
                SUBMIT
                <FaAngleRight />
              </button>
            </div>
          ) : page === 1 ? (
            <div className="paymentNavigationBtn">
              <div></div>
              <button type="button" className="nextBtn" onClick={nextBtn}>
                NEXT
                <FaAngleRight />
              </button>
            </div>
          ) : page === 2 ? (
            <div className="paymentNavigationBtn">
              <button type="button" className="prevBtn" onClick={backBtn}>
                <FaAngleLeft />
                BACK
              </button>
              <button
                type="button"
                className="nextBtn"
                onClick={dataCollection}>
                NEXT
                <FaAngleRight />
              </button>
            </div>
          ) : (
            <div className="paymentNavigationBtn">
              <button type="button" className="prevBtn" onClick={backBtn}>
                <FaAngleLeft />
                BACK
              </button>
              <button
                type="button"
                className="nextBtn confirmBtn"
                onClick={nextBtn}>
                Confirm
              </button>
            </div>
          )}
        </div>
      </>
    );
  }

  const imageUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = (e) => {
      setPaymentReceipt(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bookingPaymentPopUpWrapper">
      <div className="bookingPaymentWrapper">
        <div className="bookingPaymentProgressBar">
          <div className="progressHandlerContainer">
            <div className="booking details">
              <span>1</span>
              <h4>Details</h4>
            </div>
            <div className="booking dateAndTime">
              <span>2</span>
              <h4>Date & Time</h4>
            </div>
            <div className="booking review">
              <span>3</span>
              <h4>Review</h4>
            </div>
            <div className="booking payment">
              <span>4</span>
              <h4>Payment</h4>
            </div>
          </div>
          {/* #################################################################### */}
          <div className="bookingPaymentFormContainer">
            <div className="inputWrapper">
              <form method="post">
                <div className="formDataHandler">
                  {/* ----------------------------- ----------------------------------*/}
                  <div
                    className={
                      page === 1
                        ? "detailsContainer absolute"
                        : "detailsContainer"
                    }>
                    <fieldset className="fieldset">
                      <legend>Name</legend>
                      <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <legend>Email</legend>
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <legend>Phone</legend>
                      <input
                        type="number"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <legend>Address</legend>
                      <input
                        type="text"
                        name="address"
                        value={formValues.address}
                        onChange={handleChange}
                      />
                    </fieldset>
                    <fieldset>
                      <legend>Building type</legend>
                      <input
                        type="text"
                        name="type"
                        value={formValues.type}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>
                  {/* ---------------------------------------------------------------*/}
                  <div
                    className={
                      page === 2
                        ? "dateAndTimeHandler absolute"
                        : "dateAndTimeHandler"
                    }>
                    <fieldset className="dateWrapper">
                      <legend>Select Date</legend>
                      <input type="date" name="email" />
                    </fieldset>
                    <fieldset className="selectTime">
                      <legend>Select Time</legend>
                      <select name="time" id="time">
                        <option value="9:00Am">9:00Am</option>
                        <option value="11:00Am">11:00Am</option>
                        <option value="1:00Pm">1:00Pm</option>
                        <option value="3:00Pm">3:00Pm</option>
                      </select>
                    </fieldset>
                  </div>
                  {/* -------------------------------------------------------------- */}
                  <div
                    className={
                      page === 3
                        ? "bookingDetailsReview absolute"
                        : "bookingDetailsReview"
                    }>
                    <div className="reviewWrapper">
                      <div className="activeCompany">
                        <h3>
                          {singleBooking?.companyName
                            ? singleBooking?.companyName
                            : "Subsscription Payment"}
                        </h3>
                      </div>
                      <div className="activeCustomerInfo">
                        <fieldset className="customerDetails">
                          <legend>Details</legend>
                          <div className="customer">
                            <p className="s-header">Name</p>
                            <h3 className="c-clientInput">
                              {localStorage.getItem("name")}
                            </h3>
                          </div>
                          <div className="customer">
                            <p className="s-header">Address</p>
                            <h3 className="c-clientInput">
                              {localStorage.getItem("address")}
                            </h3>
                          </div>
                          <div className="customer">
                            <p className="s-header">Phone</p>
                            <h3 className="c-clientInput">
                              {localStorage.getItem("phone")}
                            </h3>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>Date And Time</legend>
                          <div className="customer">
                            <p className="s-header">Date</p>
                            <h3 className="c-clientInput">
                              {localStorage.getItem("date")}
                            </h3>
                          </div>
                          <div className="customer">
                            <p className="s-header">Time</p>
                            <h3 className="c-clientInput">
                              {localStorage.getItem("time")}
                            </h3>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  {/* ----------------------------------------------------------------------- */}
                  <div
                    className={
                      page === 4 ? "paymentUpload absolute" : "paymentUpload"
                    }>
                    <div className="paymentUploadContainer">
                      <div className="paymentHeader">
                        <h3>
                          Make Payment Of <span> N5,000 </span>
                        </h3>
                      </div>
                      <div className="bankTransferDetails">
                        <h4>Wema Bank</h4>
                        <h2>00045890000</h2>
                        <h4>JRUN international Limited</h4>
                      </div>
                      <div className="paymentSenderName">
                        <fieldset className="fieldset-senderName">
                          {/* <legend>Name Of Sender</legend> */}
                          <input
                            type="text"
                            name="sender"
                            value={formValues.sender}
                            onChange={handleChange}
                            placeholder="Name Of Sender"
                          />
                        </fieldset>
                      </div>
                      <div className="fileUpload">
                        <div className="fileUplaodWrapper">
                          {paymentReceipt != null ? (
                            <div className="screenshotReceipt">
                              <div className="receiptWrapper">
                                <img
                                  src={paymentReceipt}
                                  alt="jrun payment receipt"
                                />
                              </div>
                            </div>
                          ) : (
                            <>
                              <label htmlFor="file">
                                <img src={importIcon} alt="import icon" />
                                <hr />
                                Screenshot Of Payment
                              </label>
                              <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={imageUpload}
                                className="fileInput"
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ----------------------------------------------------------------------- */}
                <div className="progressBtn">{progressBtn()}</div>
              </form>
              {/* ----------------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentComponent;

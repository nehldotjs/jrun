import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./popUpStyles/serviceBooking.css";
import { CompanyServiceList } from "../../context/companyData";

import PaymentComponent from "./PaymentComponent";

function ServiceBooking(props) {
  const [viewService, setViewService] = useState(false);
  const [payment, setPayment] = useState(false);
  const { CompanyListDataArray, singleBooking, setSingleBooking } =
    useContext(CompanyServiceList);

  function paymentMethod() {
    setPayment(true);
  }
  function arrText(index) {
    const texttest = CompanyListDataArray[index].serviceList;
    let result = texttest.map((x, index) => {
      return <p key={index}>{x}</p>;
    });
    return result;
  }
  function clearAbutton() {
    console.log("Input Cleared");
  }

  function bookNowPage() {
    if (payment) {
      setPayment(false);
    }

    if (viewService) {
      setViewService(false);
    }
  }

  function bookButton(item) {
    setSingleBooking(item);
    if (!viewService) {
      setViewService(true);
    }
  }
  function popUpNav() {
    return (
      <div className="serviceLink">
        <div className="serviceLinkwrapper">
          <p>
            <Link to="/jrun" className="popupLink linkText">
              Home
            </Link>
          </p>
          <FaAngleDoubleRight className="iconlink" />
          <button className="linkText" onClick={bookNowPage}>
            Book Service
          </button>
        </div>
        <div className="serviceLinkwrapper">
          <Link to="/jrun" className="sc-cancelBtn">
            Cancel
          </Link>
        </div>
      </div>
    );
  }
  function secondscreenPopUp() {
    return (
      <div className="selectedCleaningServiceWrapper">
        <div className="serviceCompanyProperty">
          <div className="sc-imageContainer">
            <img
              src="https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="cleaning service"
            />
          </div>
          <div className="sc-nameAndAbout">
            <h3>{singleBooking?.companyName}</h3>
            <p>{singleBooking?.aboutCompany}</p>
          </div>
          <div className="sc-serviceRendered">
            {singleBooking?.serviceList.map((x, index) => {
              return <p key={index}>{x}</p>;
            })}
          </div>
        </div>

        {/* STAFF PROPS */}
        <div className="companyStaffDetails">
          <div className="sc-staffers">
            <p>Staffers</p>
            <div className="sc-staffImagesContainer">
              {singleBooking?.staff.map((x, index) => {
                return (
                  <div className="sc-employeeWrapper" key={index}>
                    <div className="sc-staffImagesWrapper">
                      <img src={x.img} alt="working staff" />
                    </div>
                    <p className="staffName">{x.name}</p>
                  </div>
                );
              })}
            </div>
            <p>Working hours</p>
            <div className="workingHoursWrapper">
              {singleBooking?.time.map((x, index) => {
                const { day, open, close } = x;
                return (
                  <div className="workingHoursContainer" key={index}>
                    <div className="workingHours">
                      <p className="day">{day}</p>
                      <div className="time">
                        <p className="start">{open}</p>
                        <span>-</span>
                        <p className="close">{close}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            className="sc-bookNowButton"
            onClick={paymentMethod}>
            Book Now
          </button>
        </div>
      </div>
    );
  }

  function serviceSectionWrapper() {
    return (
      <>
        <div className="serviceSectionwrapper">
          {viewService ? "" : popUpNav()}
          {/* SELECET SECTION */}
          <div
            className={viewService ? "deActiveBooking" : "popUpserviceContent"}>
            <div className="pop-popUpMainWrapper">
              <div className="serviceBooking-fliterContainer">
                <div className="clearAllBtnConatainer">
                  <h3 className="filterHeader">Filter</h3>
                  <div className="clearRangeBtn-container">
                    <button type="button" onClick={clearAbutton}>
                      clear all
                    </button>
                  </div>
                </div>

                <div className="filter-formContainer">
                  <form action="">
                    <div className="search">
                      <div className="searchContainer">
                        <input
                          type="text"
                          id="searchValue"
                          placeholder="Search for cleaning service"
                        />
                      </div>
                    </div>
                    <div className="range">
                      <h3>Price range</h3>
                      <div className="rangeContainer">
                        <input
                          type="text"
                          className="minimumRange"
                          placeholder="Min"
                        />
                        <hr />
                        <input
                          type="text"
                          className="maxRange"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="listScrollContainer">
                <div
                  className="serviceBooking-companyList"
                  id="serviceListingContainer">
                  {/* CARDS CONTENTS TO MAP */}
                  {[...CompanyListDataArray].map((item, index) => {
                    const { companyName, aboutCompany, minPrice, maxPrice } =
                      item;
                    return (
                      <div className="listWrapper" key={index}>
                        <div className="list-imageContainer">
                          <img
                            src="https://th.bing.com/th/id/R.041eca53549e71109f4e790d181ce6ae?rik=Rzzx8U6l0DRyAw&pid=ImgRaw&r=0"
                            alt="snap back hat"
                          />
                        </div>
                        <div className="listContext">
                          <div className="companyName">
                            <h2>{companyName}</h2>
                          </div>
                          <p>{aboutCompany}</p>
                          <div className="companyServices">
                            <div className="serviceTypes">{arrText(index)}</div>
                          </div>
                          <div className="priceAndBook">
                            <div className="listPrice">
                              <div className="moneySign">&#8358;</div>
                              <span className="min-range price">
                                {minPrice}{" "}
                              </span>{" "}
                              <hr />
                              <div className="moneySign">&#8358;</div>
                              <span className="max-range price">
                                {maxPrice}
                              </span>
                            </div>
                            <div className="bookBtn">
                              <button
                                id="primaryBookBtn"
                                onClick={() => bookButton(item)}>
                                Book
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="popUp-serviceWrapper">
      {serviceSectionWrapper()}
      <div
        className={
          !viewService ? "deActiveBooking" : "selectedCleaningService"
        }>
        {popUpNav()}
        <div className="serviceSectionwrapper">
          {payment ? (
            <div className="paymentScreenWrapper">{<PaymentComponent />}</div>
          ) : (
            <div className="secondScreenPopUp">{secondscreenPopUp()}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceBooking;

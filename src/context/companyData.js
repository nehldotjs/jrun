import React, { createContext, useState } from "react";
export const CompanyServiceList = createContext();

function CompanyData(props) {
  const [singleBooking, setSingleBooking] = useState(null);
  const CompanyListDataArray = [
    {
      id: 1,
      companyName: "JRUN cleaning service",
      aboutCompany:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident atque temporibus similique saepe obcaecati magni eligendi optio sequi ullam, earum porro veritatis repellendus voluptate alias odio ratione dolor iusto tempore.",
      serviceList: [
        "home Cleaning",
        "hotel cleaning",
        "office cleaning",
        "deep cleaning"
      ],
      minPrice: 3000,
      maxPrice: 6500,
      staff: [
        {
          name: "Alex",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          name: "Chris",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ],
      time: [
        { day: "Monday", open: "9:00 AM", close: "7:00PM" },
        { day: "Tuesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Wednesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Thursday", open: "9:00 AM", close: "7:00PM" },
        { day: "Friday", open: "9:00 AM", close: "7:00PM" }
      ]
    },

    {
      id: 2,
      companyName: "BrentFord cleaning service",
      aboutCompany:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident atque temporibus similique saepe obcaecati magni eligendi optio sequi ullam, earum porro veritatis repellendus voluptate alias odio ratione dolor iusto tempore.",
      serviceList: [
        "home Cleaning",
        "hotel cleaning",
        "office cleaning",
        "deep cleaning"
      ],
      minPrice: 4000,
      maxPrice: 8500,
      staff: [
        {
          name: "Alex",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          name: "Chris",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ],
      time: [
        { day: "Monday", open: "9:00 AM", close: "7:00PM" },
        { day: "Tuesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Wednesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Thursday", open: "9:00 AM", close: "7:00PM" },
        { day: "Friday", open: "9:00 AM", close: "7:00PM" }
      ]
    },

    {
      id: 3,
      companyName: "Goodwill cleaning service",
      aboutCompany:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident atque temporibus similique saepe obcaecati magni eligendi optio sequi ullam, earum porro veritatis repellendus voluptate alias odio ratione dolor iusto tempore.",
      serviceList: [
        "home Cleaning",
        "hotel cleaning",
        "office cleaning",
        "deep cleaning"
      ],
      minPrice: 2500,
      maxPrice: 4500,
      staff: [
        {
          name: "Alex",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          name: "Chris",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ],
      time: [
        { day: "Monday", open: "9:00 AM", close: "7:00PM" },
        { day: "Tuesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Wednesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Thursday", open: "9:00 AM", close: "7:00PM" },
        { day: "Friday", open: "9:00 AM", close: "7:00PM" }
      ]
    },
    {
      id: 4,
      companyName: "Choo cleaning service",
      aboutCompany:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident atque temporibus similique saepe obcaecati magni eligendi optio sequi ullam, earum porro veritatis repellendus voluptate alias odio ratione dolor iusto tempore.",
      serviceList: [
        "home Cleaning",
        "hotel cleaning",
        "office cleaning",
        "deep cleaning"
      ],
      minPrice: 2500,
      maxPrice: 4500,
      staff: [
        {
          name: "Alex",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          name: "Chris",
          img: "https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ],
      time: [
        { day: "Monday", open: "9:00 AM", close: "7:00PM" },
        { day: "Tuesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Wednesday", open: "9:00 AM", close: "7:00PM" },
        { day: "Thursday", open: "9:00 AM", close: "7:00PM" },
        { day: "Friday", open: "9:00 AM", close: "7:00PM" }
      ]
    }
  ];

  return (
    <CompanyServiceList.Provider
      value={{
        CompanyListDataArray,
        singleBooking,
        setSingleBooking
      }}>
      {props.children}
    </CompanyServiceList.Provider>
  );
}
export default CompanyData;

import React, { createContext, useState } from "react";
export const PaymentContext = createContext();
function PaymentData(props) {
  const [formValues, setFormValues] = useState({
    address: "",
    phone: "",
    email: "",
    name: "",
    type: "",
    date: "",
    time: "",
    sender: "",
  });
  return (
    <PaymentContext.Provider
      value={{ formValues, setFormValues }}>
      {props.children}
    </PaymentContext.Provider>
  );
}
export default PaymentData;

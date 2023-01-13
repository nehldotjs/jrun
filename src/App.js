import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Components from "./components";

import ReactLoading from "react-loading";
import CompanyData from "./companyData";

// POP UP COMPONENTS IMPORT
import ServiceBooking from "./components/popUps/ServiceBooking";
import Subscription from "./components/popUps/Subscription";

// style component
import "./app.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loadingPage">
          <ReactLoading type="cylon" color="green" height={100} width={100} />
        </div>
      ) : (
        <div div className="app">
          <CompanyData>
            <Router>
              <Routes>
                <Route
                  path="/jrun"
                  exact
                  element={<Components loading={loading} />}
                />
                <Route path="/booknow" element={<ServiceBooking />} />
                <Route path="/subscription" element={<Subscription />} />
              </Routes>
            </Router>
          </CompanyData>
        </div>
      )}
    </>
  );
}

export default App;

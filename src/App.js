// import "./assets/css/App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./modules/auth/components/Login";
import NotFoundPage from "./modules/error";
import React, { useState } from "react";
import LayoutApp from "./modules/layout/sidebar/Layout";
import { routs } from "./modules/constants/router";
import {PrimeReactProvider} from "primereact/api";
function App() {
  const { token } = useSelector((state) => state.auth);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
      <PrimeReactProvider>
          <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
              <BrowserRouter>
                  <Routes>
                      {token ? (
                          <Route
                              path="/"
                              element={
                                  <LayoutApp
                                      isDarkMode={isDarkMode}
                                      setIsDarkMode={setIsDarkMode}
                                  />
                              }
                          >
                              {routs.map((r, index) => {
                                  return (
                                      <Route
                                          key={index}
                                          path={r.path}
                                          index={r.exact}
                                          element={<r.component/>}
                                      />
                                  );
                              })}
                          </Route>
                      ) : (
                          <Route path="*" element={<Login/>}/>
                      )}
                      <Route path="*" element={<NotFoundPage/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </PrimeReactProvider>

  );
}

export default App;

import React from 'react';
import AppRouter from "./components/AppRouter";
import {BrowserRouter, useNavigate} from "react-router-dom";
import Header from "./components/header/Header";
import {SearchProvider} from "./context/SearchContext";

function App() {
  return (
      <BrowserRouter basename="/">
          <SearchProvider>  {/* Wrap components inside SearchProvider */}
              <Header />
              <AppRouter />
          </SearchProvider>
      </BrowserRouter>
  );
}

export default App;

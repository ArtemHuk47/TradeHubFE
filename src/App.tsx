import React from 'react';
import AppRouter from "./components/AppRouter";
import {BrowserRouter, useNavigate} from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
      <BrowserRouter basename="/">
          <Header />
        <AppRouter />

      </BrowserRouter>
  );
}

export default App;

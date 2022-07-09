import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import "./index.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);
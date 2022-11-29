import React from "react";
import ReactDOM from "react-dom/client";
import { StyledProvider } from "./styles/provider/styled-provider";
import { App } from "./templates/app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledProvider>
      <App />
    </StyledProvider>
  </React.StrictMode>
);

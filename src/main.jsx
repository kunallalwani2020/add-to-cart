import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContentProvider from "./Component/Store/ContentProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContentProvider>
      {" "}
      <App />
    </ContentProvider>
  </StrictMode>
);

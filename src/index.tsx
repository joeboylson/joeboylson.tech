import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PageWrapper from "./layout/PageWrapper";
import Router from "./layout/Router";
import { ThemeProvider } from "./context/ThemeContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <PageWrapper>
            <Router />
          </PageWrapper>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

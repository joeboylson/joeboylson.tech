import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PageWrapper from "./layout/PageWrapper";
import Router from "./layout/Router";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <PageWrapper>
        <Router />
      </PageWrapper>
    </StrictMode>
  );
}

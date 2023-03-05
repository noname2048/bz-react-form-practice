import React from "react";
import ReactDOM from "react-dom/client";
import KanbanPage from "./kanban";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <KanbanPage />
    </RecoilRoot>
  </React.StrictMode>
);

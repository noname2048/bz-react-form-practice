import React from 'react'
import ReactDOM from 'react-dom/client'
import KanbanPage from "./kanban";
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <KanbanPage />
    </RecoilRoot>
  </React.StrictMode>,
)

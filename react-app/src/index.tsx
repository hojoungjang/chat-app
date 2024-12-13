import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/Login";
import { UserInfoProvider } from "./contexts/userInfo.context";
import ChatPage from "./pages/Chat";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserInfoProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </UserInfoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

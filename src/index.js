import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Components/User/User';
import Admin from "./Components/Admin/Admin";
import HomePage from './Components/Home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<User />} />
        <Route path="admins" element={<Admin />} />
      </Route >
    </Routes>
  </BrowserRouter>
);

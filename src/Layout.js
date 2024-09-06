import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於這網站</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

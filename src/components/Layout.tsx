import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

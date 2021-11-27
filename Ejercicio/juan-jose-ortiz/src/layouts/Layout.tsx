import React from "react";
import Header from "./components/Header";
interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header></Header>
      {children}
    </React.Fragment>
  );
};

export default Layout;

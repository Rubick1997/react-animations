import React from "react";

import "./Backdrop.css";

const Backdrop: React.FunctionComponent<{
  show: boolean;
}> = ({ show }) => {
  const cssClasses = `Backdrop ${show ? "BackdropOpen" : "BackdropClosed"}`;

  return <div className={cssClasses}></div>;
};

export default Backdrop;

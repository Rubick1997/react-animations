import React from "react";

import "./Modal.css";

const Modal: React.FunctionComponent<{
  show: string;
  closed: () => void;
}> = ({ show, closed }) => {
  const cssClasses = `Modal ${
    show === "entering" ? "ModalOpen" : show === "exiting" && "ModalClosed"
  }`;

  return (
    <div className={cssClasses}>
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};
export default Modal;

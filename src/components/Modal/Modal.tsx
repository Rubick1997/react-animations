import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal: React.FunctionComponent<{
  show: boolean;
  closed: () => void;
}> = ({ show, closed }) => {
  return (
    <Transition mountOnEnter unmountOnExit in={show} timeout={animationTiming}>
      {(state) => {
        const cssClasses = `Modal ${
          state === "entering"
            ? "ModalOpen"
            : state === "exiting" && "ModalClosed"
        }`;
        return (
          <div className={cssClasses}>
            <h1>A Modal</h1>
            <button className="Button" onClick={closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};
export default Modal;


import "./Modal.css";
import { createPortal } from "react-dom";

export function Modal({ children }) {

  return createPortal(
    <div className="modal">
      {children}
    </div>
    , document.body);
}
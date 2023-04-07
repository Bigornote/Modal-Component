import React, { useState } from "react";
import closeBtn from "./assets/close.svg";
import "./modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <button className="close-btn" onClick={props.closeModal}>
        <img src={closeBtn} alt="Close Modal Btn" />
      </button>
      <div
        className="img-wrapper"
        style={props.image ? { display: "flex" } : { display: "none" }}
      >
        <img src={props.image} alt={props.imageContent} />
      </div>
      <div className="content-wrapper">
        <h3>{props.title}</h3>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Modal;

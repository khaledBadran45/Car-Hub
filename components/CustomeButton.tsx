"use client";
import { CustomeButtonProps } from "@/types";
import React from "react";

const CustomeButton = ({ title, containerStyels, handleClick ,btnType}: CustomeButtonProps) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyels}`} 
     
     onClick={handleClick}>
      <span className="custom-btn__text">{title}</span>
    </button>
  );
};

export default CustomeButton;

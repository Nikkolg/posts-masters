import React from "react";
import * as SC from "./styles"

export const Button = ({children, type, onClick, disabled, className}) => (
    <SC.Button 
        type={type} 
        onClick={onClick}
        disabled={disabled}
        className={className}
    >
        {children}
    </SC.Button>)


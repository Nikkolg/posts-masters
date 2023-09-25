import React from "react";
import * as SC from "./styles"

export const Modal = ({text, children}) => (
    <SC.Modal>
        <SC.ModalText>{text}</SC.ModalText>
        <SC.ModalContent>{children}</SC.ModalContent>
    </SC.Modal>
)
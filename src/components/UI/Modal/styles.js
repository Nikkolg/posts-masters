import { styled } from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: black;
    padding: 15px;
    border: 1px solid white;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 15px;
`

export const ModalText = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
    width: 100%;
`
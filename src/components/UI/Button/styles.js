import { styled } from "styled-components"

export const Button = styled.button`
    border: 1px solid black;
    background: white;
    color: black;
    padding: 10px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s ease-out;

    &:disabled {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
    }

    &:hover {
        background: black;
        color: white;
    }

    &.red:hover {
        background: red;
        color: white;
        border: 1px solid red;
    }
`
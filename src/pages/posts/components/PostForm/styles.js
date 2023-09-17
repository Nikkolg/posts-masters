import { styled } from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 250px;
    margin: 30px auto;
`

export const Field = styled.div``

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: 1px solid #282c34;
`

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
    outline: none;
`

export const Button = styled.button`
    border: 1px solid black;
    background: black;
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s ease-out;

    &:disabled {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
    }

    &:hover {
        background: white;
        color: black;
    }
`
    


import { styled } from "styled-components";

export const SearchInpit = styled.input`
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    border-radius: 10px;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &:hover {
        border-color: #007bff;
    }
`
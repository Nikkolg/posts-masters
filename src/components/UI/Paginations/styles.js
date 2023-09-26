import { styled } from "styled-components";
import { NavLink } from "react-router-dom";


export const WrapperPaginations = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`

export const PaginationsItem = styled(NavLink)`
    font-size:16px;
    text-decoration: none;
    color: black;

    &.CurrentPage {
        color: red;
    }

    &:hover {
        text-decoration: underline;
    }
`
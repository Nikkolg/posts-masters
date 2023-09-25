import { styled } from "styled-components";

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin: 0 15px 0 0;
`
export const Text = styled.div`
    font-size: 15px;
`

export const WrapperLink = styled.div`
    text-align: center;
    margin: 15px 0 0 0;
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
    align-items: center;
`

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

import { styled, keyframes  } from "styled-components"

const Animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid black;
    animation: ${Animation} 1s linear infinite;
    margin: 100px auto;
`;

import styled from "styled-components";

export const Form = styled.div`
    height: 40px;
    display: flex;
    position: absolute;
    right: 0;
    width: 15%;
    top: 40px;
    left: 85%;
    @media screen and (max-width: 1080px) {
        left: 900px;
    }
`;

export const Login = styled.a`
    color: white;
    font-size: small;
    &:hover {
        color: white;
    }
    &::after {
        content: " | ";
        color: white;
        padding: 0 6px;
    }
`;

export const Signup = styled(Login)`
`;

export const LgnfmSpan = styled.span`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: white;
        font-weight: 900;
    }
`;
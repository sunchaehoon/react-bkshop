import styled from "styled-components";

export const Navbar = styled.div`
    position: fixed;
    top: 0px;
    display: flex;
    height: 80px;
    width: 100%;
    background-color: black;
    z-index: 3;
`;

export const Logo = styled.div`
    padding-left: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const NvMenu = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 350px;
    width: 400px;
`;

export const Form = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100px;
    top: 40px;
    left: 1300px;
    @media screen and (max-width: 1400px) {
        left: 1200px;
    }
    @media screen and (max-width: 1300px) {
        left: 1100px;
    }
    @media screen and (max-width: 1200px) {
        left: 1000px;
    }
    @media screen and (max-width: 1100px) {
        left: 900px;
    }
`;

export const Login = styled.a`
    cursor: pointer;
    color: white;
    font-size: small;
    &:hover {
        text-decoration: underline;
        color: white;
        font-weight: 900;
    }
`;

export const Signup = styled(Login)`
`;

export const Frame = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-size: large;
    &:hover {
        color: white;
        transform: scale(1.1);
        transition-duration: 0.1s;
    }
`;

export const Parts = styled(Frame)`
`;

export const Finished = styled(Frame)`
`;

export const Others = styled(Frame)`
`;



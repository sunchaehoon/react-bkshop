import styled from "styled-components";

export const Container = styled.div`
    height: 744.5px;
    width: 100%;
`;

export const Navbar = styled.div`
    
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

export const Form = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100px;
    top: 40px;
    left: 1300px;
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

export const MyContent = styled.div`
    position: relative;
    width: 60%;
    max-width: 850px;
    left: 0px;
    height: 450px;
    top: 140px;
    background-color: blue;
`;   

export const Prof = styled.div`
    display: flex;
    padding: 20px 40px;
`;

export const ProfName = styled.div`
    display: flex;
    align-items: center;
    padding-left: 60px;
    font-size: 30px;
    color: sky;
`;

export const ProfDetail = styled.div`
    display: inline-block;
    line-height: 40px;
    height: 40px;
    width: 100%;
`;






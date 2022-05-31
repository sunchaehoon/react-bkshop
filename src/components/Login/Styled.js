import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 745.5px;
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

export const Lgscreen = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 100px;
    height: 400px;
`;

export const Loginmsg = styled.h1`
    font-size: 43px;
    font-weight: 900;
`;

export const Loginbox = styled.form`
    width: 500px;
    height: 270px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    background-color: #fafafa;
`;

export const LoginboxIB = styled.fieldset`
    margin-top: 50px;
`;

export const Lgnbtn = styled.input`
    width: 150px;
    height: 60px;
    margin-top: 30px;
    background-color: #09f;
    border-radius: 4px;
    color: white;
    font-weight: 800;
    font-size: large;
    &:hover {
        background-color: #0A82FF;
    }
`;

export const Lglabel = styled.label`
    display: inline-block;
    width: 72px;
    line-height: 35px;
`;

export const Lgndv1 = styled.div`
    
`;
export const Lgndv2 = styled.div``;

export const Loginspan = styled.span`
    font-size: large;
    font-weight: 500;
`;

export const Bbspan = styled(Loginspan)``;

export const Logininput = styled.input`
    border: 1px solid gray;
    border-radius: 4px;
    width: 200px;
`;

export const Bbinput = styled(Logininput)``;

export const LgnAlert = styled.div`
    position: relative;
    top: 90px;
    text-align: center;
    height: 40px;
    width: 350px;
    margin: 0 auto;
    background-color: #f8d7da;
    border: 1.5px solid #f5c2c7;
    color: #842029;
    line-height: 40px;
    visibility: hidden;
`;




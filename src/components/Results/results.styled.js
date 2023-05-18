import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(243, 237, 237);
min-height: 90vh;
`;

export const InfoBox = styled.div`
align-self: center;
display: flex;
justify-content: space-around;
border: 1px solid gray;
width: 100%;
font-size: 10px;
background-color: #A2D9CE;
border-radius: 15px;
padding: 20px;
margin-bottom:7px;
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: white;
text-shadow:rgba(0, 0, 0, 0.22) 0px 2px 4px,
            rgba(0, 0, 0, 0.22) 0px 2px 2px;
margin-right: 10px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;


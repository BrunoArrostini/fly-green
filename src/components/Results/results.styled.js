import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(243, 237, 237);
min-height: 90vh;
position: relative;
`;

export const InfoBox = styled.div`
display: flex;
justify-content: end;
border-top: 1px solid gray;
border-left: 1px solid gray;
border-right: 1px solid gray;
width: 352px;
height: 70px;
font-size: 10px;
background-color: #A2D9CE;
border-radius: 15px;
position: absolute;
top: 102px;
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: white;
margin-right: 10px;
margin-bottom: 20px ;
`;


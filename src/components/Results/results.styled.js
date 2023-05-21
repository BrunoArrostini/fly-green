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

export const BtnLearn = styled.button`
border: 1px solid gray;
display: flex;
align-self: center;
padding: 15px;
border-radius: 15px;
background-color: white;
margin-top: 15px;
box-shadow: rgba(0, 0, 0, 0.22) 0px 4px 8px,
            rgba(0, 0, 0, 0.25) 0px 12px 24px;
cursor: pointer;
font-size: 12px ;
font-family: 'Bruno Ace SC', cursive;
            
&:hover{
    transform: scale(1.05);
    border: 3px solid #A2D9CE ;

    transition: 0.2s;
}    

&:active{
    transform: scale(1.05);
    border: 2px solid #A2D9CE ;
    background-color: #A2D9CE;
    transition: 0.2s;
    color: white;
}
`;

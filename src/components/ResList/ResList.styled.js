import styled from "styled-components";

export const Box = styled.div`
border: 1px solid gray;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
border-radius: 15px;
background-color: white;
margin-bottom: 15px;
box-shadow: rgba(0, 0, 0, 0.22) 0px 4px 8px,
            rgba(0, 0, 0, 0.25) 0px 12px 24px;
cursor: pointer;
font-size: 12px ;
            
&:hover{
    transform: scale(1.05);
    border: 3px solid #A2D9CE ;
}    

&:active{
    transform: scale(1.05);
    border: 2px solid #A2D9CE ;
}
`;

export const Wrapper = styled.div`
z-index: 2;
display: flex;
flex-direction: column;
border: 1px solid gray;
padding: 18px;
border-radius: 15px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.22) 0px 14px 28px,
            rgba(0, 0, 0, 0.25) 0px 10px 10px;  
`;

export const IconWrap = styled.div`

`;

export const TitleWrap = styled.div`
display: flex;
margin: 10px;

`;

export const InfoWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;


import styled from "styled-components";

export const BoxInfo = styled.div`
border: 1px solid gray;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
padding: 10px 8px;
border-radius: 15px;
background-color: white;
margin-top: 15px;
box-shadow: rgba(0, 0, 0, 0.22) 0px 4px 8px,
            rgba(0, 0, 0, 0.25) 0px 12px 24px;
cursor: pointer;
font-size: 12px ;
   
img{
    width: 220px;
    height: 150px;
    border-radius: 15px;
}

div{
    margin-bottom: 5px;
}

p{
    font-size: 10px;
}

&:hover{
    border: 2px solid #A2D9CE ;
}    
`;

export const Container = styled.div`
display: flex;
`;
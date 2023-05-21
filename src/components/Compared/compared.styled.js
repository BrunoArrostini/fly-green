import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(243, 237, 237);
min-height: 90vh;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Box = styled.div`
border: 1px solid gray;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
border-radius: 15px;
background-color: white;
margin-bottom: 15px;
box-shadow: rgba(0, 0, 0, 0.22) 0px 4px 8px,
            rgba(0, 0, 0, 0.25) 0px 12px 24px;
cursor: pointer;
font-size: 12px ;
`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
align-self: center;
`;
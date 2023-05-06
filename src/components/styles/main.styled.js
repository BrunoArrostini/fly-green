import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
min-height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const Container = styled.div`
background-color: white;
border: 2px solid #A2D9CE;
border-radius: 10px;
display: flex;
justify-content: center;
flex-direction: column;
padding: 45px 25px ;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, 
            rgba(0, 0, 0, 0.22) 0px 10px 10px;
            
`;

export const Title = styled.h1`
font-size: 25px;
text-align: center;
font-family: 'Bruno Ace SC', cursive;
`;

export const TripWrapper = styled.div`
display: flex;
margin-top: 20px;
width: 300px;
margin-bottom: 20px;
`;

export const OneWay = styled.button`

`;


export const Roundtrip = styled.button`

`;

export const FormContainer = styled.div`
display: flex;
justify-content: center;
`;

export const Form = styled.form`
display: block;
`;

export const Departure = styled.input`
margin-bottom: 20px;
margin-left: 20px;
width: 200px;
align-items: flex-start;
`;

export const Destination = styled.input`
margin-bottom: 20px;
margin-left: 15px;
width: 200px;
`;

export const PassengerCounter = styled.input`
margin-left: 14px;
width: 40px;

`;

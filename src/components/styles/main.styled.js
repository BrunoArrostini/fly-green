import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
min-height: 60vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
position: relative;
`;

export const Container = styled.div`
border: 2px solid #A2D9CE;
border-radius: 10px;
position: absolute;
top: 50%;
width: 80%;
margin: auto;
`;

export const Title = styled.h1`
font-size: 25px;
`;

export const TripWrapper = styled.div`
display: flex;
margin: 15px;
`;

export const OneWay = styled.button`
width: 50%;
`;

export const Roundtrip = styled.button`
width: 50%;
`;

export const FormContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
`;

export const Departure = styled.input`

`;

export const Destination = styled.input`

`;

export const PassengerCounter = styled.input`

`;

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
color: black;
`;

export const Roundtrip = styled.button`
color: black;
`;

export const FormContainer = styled.div`
display: flex;
justify-content: center;
`;

export const Form = styled.form`
display: block;
`;

export const Departure = styled.select`
margin-bottom: 20px;
margin-left: 20px;
width: 200px;
align-items: flex-start;
`;

export const Destination = styled.select`
margin-bottom: 20px;
margin-left: 15px;
width: 200px;
`;

export const PassengerCounter = styled.input`
margin-left: 14px;
width: 40px;
margin-bottom: 20px;
`;

export const Btn = styled.button`
padding: 10px;
width: 50%;
font-family: 'Bruno Ace SC', cursive;
margin-left: 25%;
height: 30px;
border: none;
background-color: #A2D9CE;
box-shadow: gray 0px 3px 4px;
color: black;
font-size: 10px;

&:hover{
    background-color: white;
    box-shadow: #A2D9CE 0px 3px 4px;
}

&:active{
    background-color: #A2D9CE;
    box-shadow: gray 0px 3px 4px;
    color: white;
}
`;
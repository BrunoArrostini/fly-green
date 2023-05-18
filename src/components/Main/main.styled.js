import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
min-height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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
display: block;
justify-content: center;
`;

export const Form = styled.form`
`;

export const Departure = styled.select`
display: block;
justify-content: center;
align-items: center;
margin-bottom: 15px;
width: 300px;
font-size: 12px;
color: black;
background-color: white;
border: none;
letter-spacing: 1.15pt;
font-family: 'Bruno Ace SC', cursive;
`;

export const Destination = styled.select`
display: block;
justify-content: center;
align-items: center;
margin-bottom: 15px;
width: 300px;
font-size: 12px;
color: black;
background-color: white;
border: none;
letter-spacing: 1.15pt;
font-family: 'Bruno Ace SC', cursive;
`;

export const PassengerCounter = styled.select`
margin-left: 135px;
width: 50px;
margin-bottom: 20px;
font-family: 'Bruno Ace SC', cursive;
font-size: 10px;
color: black;
background-color: white;
border: none;
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
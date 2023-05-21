import React from 'react'
import "../../App.css"
import { Wrapper, Container, Title, Form, Departure, Destination, PassengerCounter, FormContainer, Btn} from './main.styled' 
import { useState, useEffect} from 'react'
import codes from "../../airport.json"
import { useFormik } from 'formik'
import { useNavigate} from 'react-router-dom'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import airplane from "../../images/airplane-world.gif"


const Main = () => {

  const [dep, setDep] = useState([]);
  const [des, setDes] = useState([]);
  const [passeng, setPasseng] = useState([]);  
  
  const navigate = useNavigate();
 
  const formik = useFormik({
    initialValues:{
      departure:"",
      destination:"",
      passnum:""
    },
    onSubmit: values=>{
      navigate("/results/" + values.departure + values.destination + values.passnum)
    }
  })

  const pass = []
  for(let i = 0; i <= 300; i ++){
    pass.push(i);
  }

  useEffect(()=>{
    setPasseng(pass);
    setDep(codes);
    setDes(codes);
     //eslint-disable-next-line
  },[])

  return (
    <Wrapper>
      <img src={airplane} className="airplane" alt=''></img>
      <Container>
        <Title>Trip details</Title>
        <FormContainer>
           <Form onSubmit={formik.handleSubmit}>
             <label htmlFor="departure">Departure <FlightTakeoffIcon /> </label>
             <Departure
             name="departure"
             value={formik.values.departure}
             onChange={formik.handleChange}
             >
              {dep.map((code=> <option value={code.code} key={code.code}>{code.city} ({code.country})</option>))}
             </Departure>  
             <br/>
             <label htmlFor="destination">Destination <FlightLandIcon /> </label>
             <Destination
             name="destination"
             value={formik.values.destination}
             onChange={formik.handleChange}
             >
              {des.map((code=> <option value={code.code} key={code.code}>{code.city} ({code.country})</option>))}
             </Destination>
             <br/>
             <label htmlFor="passengers">Passengers nr.</label>
             <PassengerCounter
             name="passnum"
             value={formik.values.passnum}
             onChange={formik.handleChange}
             > 
             {passeng.map((pas=> <option value={pas} key={pas}>{pas}</option>))}
             </PassengerCounter>
             <br/>
             <Btn onSubmit={formik.handleSubmit}>Calculate Footprint</Btn>
           </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main
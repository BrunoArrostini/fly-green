import React from 'react'
import "../../App.css"
import { Wrapper, Container, Title, PassengerCounter, FormContainer, Btn} from './main.styled' 
import { useState, useEffect} from 'react'
import codes from "../../airport.json"
import { useFormik} from 'formik'
import { useNavigate} from 'react-router-dom'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import airplane from "../../images/airplane-world.gif"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';


const Main = () => {


  const [passeng, setPasseng] = useState([]);  

  const navigate = useNavigate();



  const defaultProps = {
    options: codes,
    getOptionLabel: (option) => option.city ,
  };
  const [valueDep, setValueDep] = React.useState([]);
  const [valueDes, setValueDes] = React.useState([]);
 
  const formik = useFormik({
    initialValues:{
      passnum:""
    },
    onSubmit: values=>{
      navigate("/results/" + valueDep.code + valueDes.code + values.passnum)
    }
  })

  const pass = []
  for(let i = 0; i <= 300; i ++){
    pass.push(i);
  }

  useEffect(()=>{
    setPasseng(pass);
     //eslint-disable-next-line
  },[])

  return (
    <Wrapper>
      <img src={airplane} className="airplane" alt=''></img>
      <Container>
        <Title>Trip details</Title>
        <FormContainer>
           <form onSubmit={formik.handleSubmit}>
             <label htmlFor="departure">Departure <FlightTakeoffIcon /> </label>
           <Stack>
              <Autocomplete
                {...defaultProps}
                id="departure"
                value={valueDep.code}
                onChange={(event, newValue) => {
                setValueDep(newValue);
                }}
               renderInput={(params) => (
                    <TextField {...params} label="Choose departure" variant="standard" />
                     )}
              />
            </Stack>
             <br/>
             <label htmlFor="destination">Destination <FlightLandIcon /> </label>
             <Stack>
              <Autocomplete
                {...defaultProps}
                id="destination"
                value={valueDes.code}
                onChange={(event, newValue) => {
                setValueDes(newValue);
                }}
               renderInput={(params) => (
                    <TextField {...params} label="Choose destination" variant="standard" />
                     )}
              />
            </Stack>    
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
           </form>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

export default Main
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
import Stack from '@mui/material/Stack';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {Helmet} from "react-helmet-async"

const Main = () => {

    codes.sort(function (a, b) {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
    
  });

  const [passeng, setPasseng] = useState([]);  

  const navigate = useNavigate();

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    ignoreCase: true,
    trim: true,
    limit: 1,
    stringify: option => option.city,
  });

  const defaultProps = {
    options: codes,
    getOptionLabel: (option) => `${option.city} (${option.country})`,
  };
  const [valueDep, setValueDep] = React.useState([]);
  const [valueDes, setValueDes] = React.useState([]);
 
  const formik = useFormik({
    initialValues:{
      passnum:""
    },
    validate:values => {
      const errors = {};
      if (!values.passnum) {
        errors.passnum = "Required";
      }
      if (errors.passnum ==="Required"){
        alert("please insert passengers number")
      }
      return errors;
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
    <>
    <Helmet>
      <title>Feel Veg</title>
      <link rel="icon" type="image/png" href="../../../public/favicon.ico" sizes="16x16" />
      <meta name='description' content='Flights Co2 emissions' />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="title" key="title" content="Fly green" />
      <meta property="og:title" key="og:title" content="Fly green" />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content="Flights Co2 emissions"
      />
      <meta
        property="og:image"
        key="og:image"
        content={airplane}
      />   
   </Helmet> 
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
                filterOptions={filterOptions}
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
                filterOptions={filterOptions}
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
             {passeng.map((pas=> <option value={pas} key={pas} required>{pas}</option>))}
             </PassengerCounter>
             <br/>
             <Btn onSubmit={formik.handleSubmit}>Calculate Footprint</Btn>
           </form>
        </FormContainer>
      </Container>
    </Wrapper>
    </>
  )
}

export default Main
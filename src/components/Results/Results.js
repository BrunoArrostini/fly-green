import React from 'react'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ResList from '../ResList/ResList'
import {Container, InfoBox, Info, Wrapper, BtnLearn} from './results.styled'
import Loader from "../Loader/Loader"
import justice from "../../images/justice.gif"
import {MdAirplaneTicket} from "react-icons/md"


const Results = () => {

    const param = useParams();
    const [loading, setLoading] = useState(false);
    const [footprint, setFootprint] = useState([]);
    const [price, setPrice] = useState([]);
    const [km, setKm] = useState("");
     
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const navigate = useNavigate([]);

    const handleButton = () => {
      navigate("/compared/" + param.result.substring(6,9), {state:km})
    }
    
    const fetchFootprint = async () => {
    try{
        setLoading(true);
        const res = await axios.get(`https://api.goclimate.com/v1/flight_footprint?segments[0][origin]=${param.result.substring(0,3)}&segments[0][destination]=${param.result.substring(3,6)}&segments[1][origin]=${param.result.substring(3,6)}&segments[1][destination]=${param.result.substring(0,3)}&cabin_class=economy&currencies[]=USD`, {
          auth: {
            username: APP_KEY
          }
        });
        const infos = res.data
        const prices = res.data.offset_prices[0]
        setLoading(false);
        console.log(infos)
        setFootprint(infos)
        setKm(Math.ceil(res.data.footprint / 0.285))
        setPrice(prices)
    }
    catch(err){
        setLoading(false);
        console.log(err);
        return <p>Please retry later...</p>
    }
    }

    useEffect(()=>{
      fetchFootprint(param.result);
         //eslint-disable-next-line
    },[param.result])  
     
  return (
    <Container>
        {loading ? <Loader/> : 
        <Wrapper>
          <img src={justice} alt="" className='justice'></img>
            <InfoBox>
                  <MdAirplaneTicket style={{fontSize:"70px"}}/>
                  <Info>
                      <h2>Flight details: <br/> {param.result.substring(0,3)} - {param.result.substring(3,6)}</h2>
                      <p>Passenger number: {param.result.substring(6,9)}</p>
                  </Info>
            </InfoBox>
            <ResList footprintPerson={footprint.footprint} price={price.amount / 10} footprintGroup={Math.ceil(footprint.footprint * param.result.substring(6,9))}/>
        </Wrapper>}
        <BtnLearn onClick={handleButton}>Learn more</BtnLearn>
    </Container>
  )
}

export default Results
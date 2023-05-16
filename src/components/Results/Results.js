import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ResList from '../ResList/ResList'
import {Container, InfoBox, Info} from './results.styled'

const Results = () => {

    const param = useParams();
    //const [loading, setLoading] = useState(false);
    const [footprint, setFootprint] = useState([]);
    const [price, setPrice] = useState([])

    const APP_KEY = process.env.REACT_APP_API_KEY
    
    const fetchFootprint = async () => {
    try{
        //setLoading(true);
        const res = await axios.get(`https://api.goclimate.com/v1/flight_footprint?segments[0][origin]=${param.result.substring(0,3)}&segments[0][destination]=${param.result.substring(3,6)}&segments[1][origin]=${param.result.substring(3,6)}&segments[1][destination]=${param.result.substring(0,3)}&cabin_class=economy&currencies[]=USD`, {
          auth: {
            username: APP_KEY
          }
        });
        const infos = res.data
        const prices = res.data.offset_prices[0]
        //setLoading(false);
        console.log(infos)
        setFootprint(infos)
        setPrice(prices)
    }
    catch(err){
        //setLoading(false);
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
        <InfoBox>
            <Info>
                <h2>Flight details: <br/> {param.result.substring(0,3)} - {param.result.substring(3,6)}</h2>
                <p>Passenger number: {param.result.at(6)}</p>
            </Info>
        </InfoBox>
        <ResList footprintPerson={footprint.footprint} price={price.amount} footprintGroup={Math.ceil(footprint.footprint * param.result.at(6))}/>
    </Container>
  )
}

export default Results
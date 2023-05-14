import React from 'react'
import axios from 'axios'
import { Container, Wrapper } from './results.styled'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Results = () => {

    const param = useParams();
    //const [info, setInfo] = useState([])

    console.log(process.env.REACT_APP_API_KEY);

    const fetchFootprint = async (departure, destination) => {
        try{
            //setLoading(true);
            const res = await axios.get(`https://api.goclimate.com/v1/flight_footprint/YOUR_API_KEY:${process.env.REACT_APP_API_KEY}/segments[0][origin]=${departure}/segments[0][destination]=${destination}/segments[1][origin]=${destination}/segments[1][destination]=${departure}/cabin_class=economy/currencies[]=EUR`);
            const infos = res.data
            //setLoading(false);
            console.log(infos)
            //setInfo(infos)
            
        }
        catch(err){
            //setLoading(false);
            console.log(err);
            return <p>Please retry later...</p>
        }
    }

     useEffect(()=>{
      fetchFootprint(param.result);
     },[param.result])       
     
  return (
    <Container>
        <Wrapper>
            
        </Wrapper>
    </Container>
  )
}

export default Results
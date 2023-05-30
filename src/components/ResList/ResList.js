import React from 'react'
import { Box, Wrapper, IconWrap, InfoWrap, TitleWrap} from './ResList.styled'
import Co2Icon from '@mui/icons-material/Co2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PaidIcon from '@mui/icons-material/Paid';

const ResList = ({price, footprintPerson, footprintGroup}) => {

  const [isActiveEach, setIsActiveEach] = React.useState(false);
  const [isActiveTotal, setIsActiveTotal] = React.useState(false);
  const [isPriceInfo, setIsPriceInfo] = React.useState(false);

  const handleActive = () => {
    isActiveEach ? setIsActiveEach(false) : setIsActiveEach(true)
  }

  const handleActiveTotal = () => {
  isActiveTotal ? setIsActiveTotal(false) : setIsActiveTotal(true)
  } 

  const handleActivePrice = () => {
    isPriceInfo ? setIsPriceInfo(false) : setIsPriceInfo(true)
    } 
  
  return (
    <Wrapper>
        <Box onMouseEnter={handleActive} onMouseLeave={handleActive}>
            <IconWrap> <AirplanemodeActiveIcon /></IconWrap>
            <TitleWrap > <p>Footprint (passenger)</p> </TitleWrap>
            <InfoWrap> <p>{footprintPerson / 1000} Tones</p> <Co2Icon style={{fontSize:"30px", color:"rgb(87, 86, 86)"}} /></InfoWrap>
        </Box>
        
        <Box onMouseEnter={handleActiveTotal} onMouseLeave={handleActiveTotal}>
            <IconWrap> <AirplanemodeActiveIcon /> </IconWrap>
            <TitleWrap> <p>Footprint (total)</p> </TitleWrap>
            <InfoWrap> <p>{footprintGroup / 1000} Tones </p> <Co2Icon style={{fontSize:"30px", color:"rgb(87, 86, 86)"}} /></InfoWrap>
        </Box>
        <Box onMouseEnter={handleActivePrice} onMouseLeave={handleActivePrice}>
            <IconWrap> <PaidIcon /> </IconWrap>
            <TitleWrap> <p>Ticket price</p> </TitleWrap>
            <InfoWrap> <p>{price}</p> <AttachMoneyIcon style={{fontSize:"20px", color:"rgb(87, 86, 86)"}}/></InfoWrap>
        </Box>
    </Wrapper>
    
  )
}

export default ResList
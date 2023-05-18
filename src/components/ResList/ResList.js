import React from 'react'
import { Box, Wrapper, IconWrap, InfoWrap, TitleWrap, FootprintPass, FootprintTotal, PriceInfo } from './ResList.styled'
import Co2Icon from '@mui/icons-material/Co2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PaidIcon from '@mui/icons-material/Paid';
import rafs from "../../images/rafs.gif"

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
        {isActiveEach && <FootprintPass>
              <p>Total flight footprint for one passenger</p>
              <img src={rafs} className="rafs" alt=''></img>
              </FootprintPass>}
        <Box onMouseEnter={handleActiveTotal} onMouseLeave={handleActiveTotal}>
            <IconWrap> <AirplanemodeActiveIcon /> </IconWrap>
            <TitleWrap> <p>Footprint (total)</p> </TitleWrap>
            <InfoWrap> <p>{footprintGroup / 1000} Tones </p> <Co2Icon style={{fontSize:"30px", color:"rgb(87, 86, 86)"}} /></InfoWrap>
        </Box>
        {isActiveTotal && <FootprintTotal>
              <p>Total flight footprint calculated on passenger number</p>
              <img src={rafs} className="rafs" alt=''></img>
              </FootprintTotal>}
        <Box onMouseEnter={handleActivePrice} onMouseLeave={handleActivePrice}>
            <IconWrap> <PaidIcon /> </IconWrap>
            <TitleWrap> <p>Price</p> </TitleWrap>
            <InfoWrap> <p>{price}</p> <AttachMoneyIcon style={{fontSize:"20px", color:"rgb(87, 86, 86)"}}/></InfoWrap>
        </Box>
        {isPriceInfo && <PriceInfo>
              <p>Price is calculated approximately</p>
              <img src={rafs} className="rafs" alt=''></img>
              </PriceInfo>}
    </Wrapper>
    
  )
}

export default ResList
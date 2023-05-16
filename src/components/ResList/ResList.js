import React from 'react'
import { Box, Wrapper, IconWrap, InfoWrap, TitleWrap } from './ResList.styled'
import Co2Icon from '@mui/icons-material/Co2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PaidIcon from '@mui/icons-material/Paid';

const ResList = ({price, footprintPerson, footprintGroup}) => {
  return (
    <Wrapper>
        <Box>
            <IconWrap> <AirplanemodeActiveIcon /></IconWrap>
            <TitleWrap> <p>Footprint (passenger)</p> </TitleWrap>
            <InfoWrap> <p>{footprintPerson}Kg</p> <Co2Icon style={{fontSize:"30px", color:"rgb(87, 86, 86)"}} /></InfoWrap>
        </Box>
        <Box>
            <IconWrap> <AirplanemodeActiveIcon /> </IconWrap>
            <TitleWrap> <p>Footprint (total)</p> </TitleWrap>
            <InfoWrap> <p>{footprintGroup}Kg </p> <Co2Icon style={{fontSize:"30px", color:"rgb(87, 86, 86)"}} /></InfoWrap>
        </Box>
        <Box>
            <IconWrap> <PaidIcon /> </IconWrap>
            <TitleWrap> <p>Price</p> </TitleWrap>
            <InfoWrap> <p>{price}</p> <AttachMoneyIcon style={{fontSize:"20px", color:"rgb(87, 86, 86)"}}/></InfoWrap>
        </Box>
    </Wrapper>
    
  )
}

export default ResList
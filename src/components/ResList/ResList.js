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
            <TitleWrap> <p>Footprint (per person)</p> </TitleWrap>
            <InfoWrap> <p>{footprintPerson}</p> <Co2Icon /></InfoWrap>
        </Box>
        <Box>
            <IconWrap> <AirplanemodeActiveIcon /> </IconWrap>
            <TitleWrap> <p>Footprint (total)</p> </TitleWrap>
            <InfoWrap> <p>{footprintGroup} <Co2Icon /> </p> </InfoWrap>
        </Box>
        <Box>
            <IconWrap> <PaidIcon /> </IconWrap>
            <TitleWrap> <p>Price</p> </TitleWrap>
            <InfoWrap> <p>{price}</p> <AttachMoneyIcon style={{fontSize:"20px"}}/></InfoWrap>
        </Box>
    </Wrapper>
    
  )
}

export default ResList
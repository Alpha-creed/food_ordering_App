import React, { useState } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle';
import { styled } from 'styled-components';

const Alerts = ({severity,alertTilte,alertMessage}) => {
    // const [severity,setSeverity] = useState("info")
  return (
    <AlertStyled>
      <Alert severity={severity}>
        <AlertTitle>{alertTilte}</AlertTitle>
        {alertMessage}
      </Alert>
    </AlertStyled>
  )
}

const AlertStyled = styled.div`
width:500px;
`;
export default Alerts

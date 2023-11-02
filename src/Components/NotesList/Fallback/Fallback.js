// @flow 
import * as React from 'react';
import FallbackImg from "../../../images/fallback.png"
import { Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

export const Fallback = () => {
  return (
    <div style={{
      display: "flex", flexDirection: "column", width: "50%", height: "100%", textAlign: "center", justifyContent: "center", alignItems: "center",
      position: "relative", margin: "auto"
    }}>
      <img style={{ width: "90%", maxWidth: "500px" }} src={FallbackImg} alt="fallback" />
      <p style={{ fontSize: "50px", fontWeight: "400" }}>Pocket Notes</p>
      <Typography variant="body1" >Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</Typography>
      <div style={{ position: "absolute", bottom: "1rem", display: "flex", alignItems: "center" }}>
        <LockIcon size='small' color='#292929' />
        end-to-end encrypted
      </div>
    </div>
  );
};
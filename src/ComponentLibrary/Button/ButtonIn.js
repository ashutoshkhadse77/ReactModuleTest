// @flow 
import { Button } from '@mui/material';
import * as React from 'react';

export const ButtonIn = ({ children, icon, style, ...rest }) => {
  return (
    <Button
      {...rest}
      style={{ padding: "0.3rem 1rem", backgroundColor: "black", color: "white", display: "flex", alignItems: "center", borderRadius: "50px", minWidth: '8rem', ...style }}
    >
      {icon && <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
        {icon}
      </div>}
      {children}
    </Button >
  );
};

import * as React from 'react'
import { useMediaQuery } from "@mui/material";
import ComplexGrid from "./complexgrid";
import { useTheme } from '@mui/material/styles';

export default function complexgrid() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (

    <>
     
     {matches ? <ComplexGrid matches={matches}/> : <ComplexGrid matches={matches}/>} 
      
    </>
       
  );
}

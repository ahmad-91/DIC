import * as React from 'react'
import Newscard from './newscard'


export default function newscard() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
  
      <>
       
       {matches ? <Newscard matches={matches}/> : <Newscard matches={matches}/>} 
        
      </>
         
    );
  }
  
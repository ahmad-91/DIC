import { useUIContext } from "../../context/ui";
import * as React from 'react';
import { makeStyles, styled } from '@mui/styles';
import Stack from '@mui/material/Stack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Grid from '@mui/material/Grid';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Typography,Button, ButtonGroup} from '@mui/material';
const theme = createTheme();
theme.typography.h3 = {
  [theme.breakpoints.up('md')]: {
    fontSize: 12,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 7,
  }
};

export default function AppbarDesktop({ matches }) {

  return (
    <ThemeProvider theme={theme}>
    <Grid container sx={{display:'flex'}}>
    <Grid item container  xs={6} md={9} lg={9} sm={6} xl={9} sx={{ display:'flex', flexDirection:'row' ,  color: 'white', backgroundColor: '#27357e', textAlign:'center' }}>
      <Stack direction ='row'>
      <AccessTimeIcon/>  
      <Typography fontFamily='almarai' variant='h3' style={{ paddingRight:'3px',paddingTop:'5px'}}>
      ساعات العمل : من الساعة 8 صباحاً الى الساعة 6 مساء  
      </Typography>
      </Stack>  
    </Grid>

    <Grid item  container display='flex' flexDirection='row'  xs={6} md={3} lg={3}  sm={6}  justifyContent='left'  style={{  fontSize:'12px' , color: 'white', backgroundColor: '#27357e' }}>
    <Stack direction ='row' justifyContent='left'>
    <Typography fontFamily='almarai' variant='h3' style={{ paddingRight:'3px',paddingTop:'5px'}}>
    <MailOutlineIcon  style={{fontSize:'10px'}} /> info@drwazah.sa  
    </Typography>
    <Typography fontFamily='almarai' variant='h3' style={{ paddingRight:'3px',paddingTop:'5px'}}>
    <PhoneEnabledIcon style={{fontSize:'10px'}}/> 966146262221  + 
    </Typography>
    </Stack>
    </Grid>
    </Grid>
    </ThemeProvider>

  );

}

import { useUIContext } from "../../context/ui";
import * as React from 'react';
import { makeStyles, styled } from '@mui/styles';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Grid from '@mui/material/Grid';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Typography,Button, ButtonGroup} from '@mui/material'

export default function Contactbar({ matches }) {
  

  const useStyles = makeStyles(theme => ({
    root:{
      flexGrow: 1,
    },
    Paper:{
      backgroundColor:'blue',
    }

  }));

  return (

    <Grid container sx ={{ display:'flex',flexDirection:'row' , justifyContent:'center' ,alignItems:'center', backgroundColor: '#27357e' }} >
    <Grid item  xs={12} lg={8} fontFamily='almarai'  style={{  fontSize:'12px' , color: 'white', backgroundColor: '#27357e' }}>
    <Button   variant='outlined'    xs={1}   style={{  fontSize:'14px' , color: 'white', backgroundColor: '#27357e', textAlign:'left', padding:'5px' }}>
        <Typography fontFamily='almarai' variant='h5' style={{ padding:'3px'}}>
        تطبيقات الجوال
    </Typography>

    </Button>
    <Typography fontFamily='almarai' variant='h6' style={{ padding:'3px'}} >
    حمل تطبيقنا الجديد واطلب جميع خدماتنا بسهولة
    </Typography>
    </Grid>

    <Grid item container xs={12} lg={4}  style={{ justifyContent:'flex-end' , alignItems:'flex-end', fontSize:'12px' , color: 'white', backgroundColor: '#27357e' }}>
   <ButtonGroup variant='text'  fontFamily='almarai'  >
   <img src="./images/pngegg.png" height='150px' width='218px' />
    </ButtonGroup>
    </Grid>
  </Grid>

  );


}

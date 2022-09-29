import { useUIContext } from "../../context/ui";
import * as React from 'react';
import { makeStyles, styled } from '@mui/styles';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Grid from '@mui/material/Grid';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Typography, Button, Divider, Box, ButtonGroup } from '@mui/material'

export default function Footer({ matches }) {


  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    Paper: {
      backgroundColor: 'blue',
    }

  }));

  return (
      <Grid container display='flex' flexDirection='row' alignItems='Center' justifyContent='center' backgroundColor='#27357e' marginTop='15px' pb='20px'>
        <Grid item container  display='flex' flexDirection='column' justifyContent='center'  alignItems='Center' xs={12} sm={4} md={4} lg={4}
          fontFamily='almarai' alignContent='center' style={{ fontSize: '12px', color: 'white' }}>
          <img src="./images/fotterarb.png" height='30px' width='218px' />
          <img src="./images/footereng.png" height='20px' width='218px' />
        </Grid>

        <Grid item container sx={{  display:'flex', alignItems:'Center'  ,flexDirection:'column',
          justifyContent:'center' ,fontFamily:'almarai',
           fontSize: '12px', color: 'white'}} xs={12} sm={3} md={4} lg={3}  >
          <Typography textAlign='center' fontFamily='almarai'>
            تواصل معنا
          </Typography>
          <Divider color='white' />
          <Typography textAlign='center' fontFamily='almarai'>

            info@drwazah.sa

            +966146262221
          </Typography>
          <Typography textAlign='center' fontFamily='almarai'>

            طريق الملك عبدالعزيز , المحمدية د، سكاكا 72341
          </Typography>
          
        </Grid>

        <Grid item container sx={{ display:'flex', flexDirection:'column' ,justifyContent:'center', fontFamily:'almarai',
          alignContent:'center'}} style={{
            fontSize: '12px', color: 'white',}} xs={12} sm={4} md={3} lg={4} >
          <Typography sx={{ fontSize: '22px'}} >

            تابعنا عبر
            </Typography>
            <Divider />

          <Typography>
            DRWAZAH_SA
          </Typography>
        </Grid>
      </Grid>

  );


}

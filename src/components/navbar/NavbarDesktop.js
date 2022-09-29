import { useUIContext } from "../../context/ui";
import * as React from 'react';
import { makeStyles, styled } from '@mui/styles';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container, Stack } from '@mui/material/';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box  } from "@mui/system";
import {ButtonGroup,Divider, useMediaQuery , useTheme} from '@mui/material';
import AppDrawer from "../drawer";

export default function NavbarDesktop({ matches }) {
  const theme = useTheme();
  console.log(theme);
  const isMatched = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatched);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const useStyles = makeStyles(theme => ({
    root:{
      flexGrow: 1,
    },
    Paper:{
      backgroundColor:'blue',
    }

  }));

  return (

    <Grid container  paddingTop='15px'   direction="row"
    alignItems="center"
    justifyContent="center" >
    <Grid item  xs={4} md={3} lg={2}  sm={3} style={{  fontSize:'14px' , color: 'white', textAlign:'right' }}>
     <Stack direction='column'>
    <img src="./images/logo.png" alt="logo"  style={{height: '21px',
    width: '140px'}} />
        <img src="./images/logoen.png" alt="logo"  style={{height: '10px',
    width: '140px'}} />
    </Stack>
    </Grid>
    {
      isMatched ? (
      <>
      <Grid item direction='row' justifyContent='left' xs={6} ></Grid>
      <Grid item direction='row' justifyContent='left' xs={2} >
      <AppDrawer />
      </Grid>
     </>
      ) :(
        <>
    <Grid item  xs={4} md={6} lg={7}  sm={7} justifyContent='center'  style={{  fontSize:'12px' , color: 'white',textAlign:'center', fontFamily:'almarai' }}>
         <Button href="#" style={{fontFamily:'almarai', fontSize:'16px', color:'black'}}>الرئيسة</Button>
         <Button href="#" style={{fontFamily:'almarai'}}>عن دروازة</Button>
         <Button href="#" style={{fontFamily:'almarai'}}>مجموعتنا</Button>
         <Button href="#" style={{fontFamily:'almarai'}}> المركز الإعلامي</Button>
         <Button href="#" style={{fontFamily:'almarai'}}>تواصل معنا </Button>
         <Button href="#"style={{fontFamily:'almarai'}} > تابعنا </Button>
    </Grid>
        <Grid item  xs={2}  md={2} lg={2} sm={2}  style={{  fontSize:'12px' , color: 'white' , textAlign:'left' }}>
            <Button variant='contained' style={{backgroundColor:'#27357e',fontFamily:'almarai'}}> دخول </Button>
        </Grid>
        </>
      )
    }


    </Grid>
  );


}

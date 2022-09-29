import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import Button from '@mui/material/Button';
import { Box, Grid, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { color, textAlign } from '@mui/system';

const ContactForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }} lg={10}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item  >
          <Stack direction='column' justifyContent="center"  alignItems="center">
            <Typography mt='25px'  style={{fontSize:'26px', fontFamily:'almarai', color:'#006cb4'}}>
              اتصل بنا
            </Typography>
            <Typography style={{fontSize:'18px', fontFamily:'almarai'}}> 
              تأكد بأننا نهتم بكل رسالة تصل إلينا
            </Typography>
          </Stack>
        </Grid>
        <Grid item
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center" p={2}>

          <Grid item  >
            <TextField id="filled-basic" label="الاسم" variant="filled" />
          </Grid>
          <Grid item >
            <TextField id="filled-basic" label="البريد الالكتروني" variant="filled" />
          </Grid>
          <Grid item style={{fontSize:'22px', fontFamily:'almarai'}} >
          <TextField id="filled-basic" label="رقم الجوال" variant="filled" />
          </Grid>
        </Grid>
        <Grid item  justifyContent='center' style={{fontSize:'22px', fontFamily:'almarai'}} p={2}>
        <TextField sx={{textAlign:'right', direction:'rtl' ,width:'300px' }} id="filled-basic" label="نص الرسالة" variant="filled" />
        </Grid>
        
        <Grid item container direction='row' justifyContent='center' justifyItems='center'  mb={3}  style={{fontSize:'22px', fontFamily:'almarai'}}>
          <Grid item  lg={5} md={5} sm={5} xs={5} >
          </Grid>
          <Grid item display='flex' justifyContent='center' pr={20} justifyItems='center' lg={5} md={5} sm={5} xs={5}>
          <Button width='30px' variant="contained">ارسال</Button>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
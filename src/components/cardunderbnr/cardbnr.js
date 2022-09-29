import {
  Button, Divider, Drawer,
  IconButton, List,
  ListItemButton, ListItemText, Typography,Paper, CardContent, CardActions, Stack, Grid,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import * as React from 'react';
import { ThemeProvider } from "@mui/system";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PanToolIcon from '@mui/icons-material/PanTool';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import theme from '../../styles/theme';

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontSize:18,
  color: theme.palette.primary,
}));
export default function Cardbnr() {
  return (

    <ThemeProvider theme={theme}>
      <Grid container 
        justifyContent="center"
        alignItems="center"  paddingTop='5px' paddingBottom='5px' spacing={2} style={{fontFamily:'almarai'}}>
        <Grid item >
          <Box width='134px' style={{ border: '1px solid #19aed9', boxShadow:'1px 2px #00617d',fontSize: '30px' }}>
            <Card style={{ height: '130px', pl: 1, pb: 1 }} >
              <CardContent width='134px' style={{ border: '1px solid #19aed9', fontSize: '40px' }}>
                <Stack direction='column' alignItems='center' spacing='5px'>
                  <AutoStoriesIcon style={{ color: '#19aed9', fontSize: '40px' }} />
                  <Typography style={{ fontSize: '18px', fontFamily:'almarai'}} >
                    المنهج
                  </Typography>
                  <CardActions >
                    <ArrowBackIcon color="primary" />
                  </CardActions>
                </Stack>
              </CardContent>

            </Card>

          </Box>
        </Grid>
        <Grid item >
          <Box width='134px'  style={{ border: '1px solid #19aed9', boxShadow:'1px 2px #00617d',fontSize: '30px'}}>
            <Card style={{ height: '130px', pl: 1, pb: 1 }} >

              <CardContent width='134px' style={{ border: '1px solid #19aed9', fontSize: '30px' }}>
                <Stack direction='column' alignItems='center' spacing='5px'>
                  <PanToolIcon  style={{ color: '#19aed9', fontSize: '30px' }} />
                  <Item style={{ fontSize: '18px', fontFamily:'almarai'}}>
                   القيم
                  </Item>
                  <CardActions >
                    <ArrowBackIcon color="primary" />
                  </CardActions>
                </Stack>
              </CardContent>

            </Card>

          </Box>
        </Grid>
        <Grid item >
          <Box width='134px' style={{ border: '1px solid #19aed9', boxShadow:'1px 2px #00617d',fontSize: '30px'}}>
            <Card style={{ height: '130px', pl: 1, pb: 1 }} >

              <CardContent width='134px' style={{ border: '1px solid #19aed9', fontSize: '30px' }}>
                <Stack direction='column' alignItems='center' spacing='5px'>
                  <AutoStoriesIcon style={{ color: '#19aed9', fontSize: '30px' }} />
                  <Typography style={{ fontSize: '16px', fontFamily:'almarai'}}>
                   مجلس الادارة
                  </Typography>
                  <CardActions >
                    <ArrowBackIcon color="primary" />
                  </CardActions>
                </Stack>
              </CardContent>

            </Card>

          </Box>
        </Grid>
        <Grid item >
          <Box width='134px' style={{ border: '1px solid #19aed9', boxShadow:'1px 2px #00617d',fontSize: '40px'}}>
            <Card style={{ height: '130px', pl: 1, pb: 1 }} >

              <CardContent width='134px' style={{ border: '1px solid #19aed9', fontSize: '40px' }}>
                <Stack direction='column' alignItems='center' spacing='5px'>
                  <FileCopyIcon style={{ color: '#19aed9', fontSize: '40px' }} />
                  <Typography style={{ fontSize: '18px', fontFamily:'almarai'}}>
                  ملف الشركة
                  </Typography>
                  <CardActions >
                    <ArrowBackIcon color="primary" />
                  </CardActions>
                </Stack>
              </CardContent>

            </Card>

          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );

}
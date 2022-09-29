import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { fontFamily } from '@mui/system';
const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
});

export default function ComplexGrid() {
        return (
                <Grid container display='flex' >
                        <Grid item container
                                lg={12} md={12} sm={12}
                                sx={{ display: 'flex', flexDirection: 'row'}}  >

                                <Box item container lg={8} md={8} sm={12}
                                        sx={{ display: 'flex', flexDirection: 'Column', fontSize:'20px', lineHeight:'1.6em',
                                         height: '250px', 
                                         justifyContent: 'space-between' ,mr:'20px' ,fontFamily:'almarai' ,color:'#8f8f8f'}}>
                                   
                                        <Grid item container sx={{mr:'40px'}}>


                                                نبحث عن شركاء يسعون بجهودهم لتحقيق التميّز والتطوّر<br />
                                                ولهذا السبب في الأساس تقود شركاتنا اباستمرار عبر مختلف الصناعات والمجالات

                                        </Grid>
                          
                                        <Box item container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >

                                                <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' ,fontFamily:'almarai' }}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4', fontFamily:'almarai' }} />
                                                        قطاع الطاقة والكهرباء
                                                </Typography>
                                                <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' ,fontFamily:'almarai'}}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4' }} />
                                                        القطاع العقاري
                                                </Typography>
                                                <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex',fontFamily:'almarai' }}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4' }} />
                                                        القطاع الغذائي
                                                </Typography>
                                        </Box>
                                        <Box item container sx={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between' }} >

                                                <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex',fontFamily:'almarai' }}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4' }} />
                                                        قطاع التصنيع
                                                </Typography>
                                                <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' ,fontFamily:'almarai'}}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4' }} />
                                                        قطاع الانشاء و المقاولات
                                                </Typography>
                                                <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' ,fontFamily:'almarai'}}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4' }} />
                                                        قطاع النقل 
                                                </Typography>
                                        </Box>
                                        <Box item container  sx={{ display: 'flex', flexDirection: 'row' }} >

                                                <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' , spacing:'20px' ,fontFamily:'almarai'}}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4' }} />
                                                       القطاع التقني
                                                </Typography>
                                                <Typography  sx={{ verticalAlign: 'middle', display: 'inline-flex', mr:'240px' ,flexFlow: 'warp',fontFamily:'almarai'}}>
                                                        <KeyboardDoubleArrowLeftIcon sx={{ color: '#006cb4' }} />
                                                       القطاع العقاري
                                                </Typography>
                                        </Box>
                                </Box>
                                <Grid item container display='flex' lg={4} md={4} sm={12} sx={{mt:'20px'}} alignItems='flex-end' justifyContent='flex-end'>
                                        <img src="./images/env.png" height='350x' width='350px' />
                                </Grid>
                        </Grid>
                </Grid>

        );
}



/*

                                 <Box item >
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '16px', paddingTop: '10px', paddingRight: '70px' }}>
                                        نبحث عن شركاء يسعون بجهودهم لتحقيق التميّز والتطوّر
                                        ولهذا السبب في الأساس تقود شركاتنا اباستمرار عبر مختلف الصناعات والمجالات
                                </Typography >
                                </Box>
                                <Box item  >
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '16px', paddingTop: '10px', paddingRight: '70px' }}>
                                        نبحث عن شركاء يسعون بجهودهم لتحقيق التميّز والتطوّر
                                        ولهذا السبب في الأساس تقود شركاتنا اباستمرار عبر مختلف الصناعات والمجالات
                                </Typography >
                                </Box>
                        </Box >
                        <Box item container>
                                <img src="./images/env.png" height='400x' width='400px' />
                        </Box>
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', spacing: '5px', fontSize: '20px' }}>
                                        قطاع الطاقة والكهرباء
                                </Typography >
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '20px', paddingRight: '20px' }}>
                                        القطاع العقاري
                                </Typography >
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '20px', paddingRight: '20px' }}>
                                        قطاع الانشاءات و المقاولات
                                </Typography >

                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '20px', paddingRight: '20px' }}>
                                        القطاع التقني
                                </Typography >
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '20px', paddingRight: '20px' }}>
                                        القطاع الغذائي
                                </Typography >
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '20px', paddingRight: '20px' }}>
                                        قطاع الانشاءات والمقاولات
                                </Typography >
                                <Typography sx={{ fontFamily: 'almarai', variant: 'subtitle2', fontSize: '20px', paddingRight: '20px' }}>
                                        قطاع التصنيع
                                </Typography > 
                                */





import { Button, Stack, Card, CardMedia, useMediaQuery, Box, Container } from "@mui/material";
import { useTheme } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
function Cardletter() {
  const theme = useTheme();
  console.log(theme);
  const isMatched = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatched);
  return (

    //if we use just xs scale that will om all screens small and large
    //we have xs  , sm , md , lg ,  xl 5-screens (breakpoints)
    <Grid container style={{ direction: "rtl" , marginTop:'20px'}} >
      <Grid item xs={0} sm={1} md={1} lg={1} >
      </Grid>
      <Grid item xs={4} sm={2} md={6} lg={2}>
        <Box display='flex' flexGrow='0' flexShrink='1' maxWidth='250px' maxHeight='250px' style={{ padding: '15px' }}>
          <CardMedia
            component="img"
            image="./images/banner/hithemletter.png"
            alt="Live from space album cover"
          />
        </Box>
      </Grid>
      <Grid item xs={8} sm={8} md={6} lg={8}>
        <Typography fontFamily='almarai' fontSize='12px' >
          كلمة رئيس مجلس الادارة
        </Typography>
        <Typography fontFamily='almarai' fontSize='20px'>
          الأستاذ هيثم بن نزال العوذة
        </Typography>
        <Divider sx={{ backgroundColor: '#006cb4' }} />
        {isMatched ? (
          <>
            <Typography style={{ fontSize: '10px',  textalign:'justify' ,textJustify:'inter-word' , fontWeight: '400', fontFamily: 'almarai', paddingRight: '10px', lineHeight: '1.8em' }}>
              بنيت شركة دروازة على أســاس متين ، كــــانـــت نــــــتـــاج جـهــــد
              مشترك وفريق عمل متكاتف حققنا من خلال ذلك العديد مـن النجاحات بفترة قيـاسية وجيزة ولله الحمد
              . لذلك نسعى في دروازة أن نكون منارة في تقديم أفضل

              خدماتنا لكافة العملاء في كل المناطق التي تنتشر بها فروع الشركة لذلك فإننا عملنا على تحديد المسار الاستراتيجي
              الذي سيرشدنا الى ثقافة التميز والصدارة في تقديم أرقى الخدمات لأننا نؤمن أن ما تنهجه الشركة من أنظمة
              مستحدثة سيعود بالفائدة على العميل والموظف في المقام الأول ثم للمساهمين بإذن الله
            </Typography>
          </>

        ) : (
          <>
            <Typography style={{ fontSize: '20px', textalign:'justify' ,textJustify:'inter-word' , justifyContent: 'stretch', fontFamily: 'almarai', fontWeight: '400', paddingRight: '1px', lineHeight: '1.8em' }}>
              بنيت شركة دروازة على أســاس متين ، كــــانـــت نــــــتـــاج جـهــــد
              مشترك وفريق عمل متكاتف حققنا من خلال ذلك العديد مـن النجاحات بفترة قيـاسية وجيزة ولله الحمد
              . لذلك نسعى في دروازة أن نكون منارة في تقديم أفضل

              خدماتنا لكافة العملاء في كل المناطق التي تنتشر بها فروع الشركة لذلك فإننا عملنا على تحديد المسار الاستراتيجي
              الذي سيرشدنا الى ثقافة التميز والصدارة في تقديم أرقى الخدمات لأننا نؤمن أن ما تنهجه الشركة من أنظمة
              مستحدثة سيعود بالفائدة على العميل والموظف في المقام الأول ثم للمساهمين بإذن الله
            </Typography>
          </>
        )}

      </Grid>


    </Grid>


  );

}

export default Cardletter;
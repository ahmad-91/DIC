import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Stack } from '@mui/material';
export default function Newscard() {
  const theme = useTheme();
  const cardStyle={
    maxWidth: 345, borderRadius: '30px', direction: 'rtl'
  }
  return (
    <Box   display= 'flex'  direction={{xs: 'column', sm:'column' , md:'row', lg:'row'}} flexWrap= 'warp'  justifyContent='center'>
      <Stack direction={{xs: 'column', sm:'column' , md:'row', lg:'row'}}  spacing={{ xs: 1, sm: 2, md: 2 , lg:2 }}>
        <Card sx={{cardStyle,marginLeft:'10px'}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/images/banner/nick-morrison-fhnnjk1yj7y-unsplash-3@1x.png"
            style={{ borderRadius: '30px', paddingTop: '2px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div" color='secondary'>
              الأربعاء الموافق 18/8/2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              استضاف صباح اليوم مركز ريادة الأعمال بالجوف i-be د.نعيمة المويشير
              مشرفة مركز الابتكار  وريادة الأعمال بجامعة الجوف  و أ. حسن الغنام
              مدير فرع معهد ريادة الأعمال بالجوف
            </Typography>
          </CardContent>
          <CardActions style={{ float: 'left' }}>
            <Button endIcon={< ArrowLeftIcon />} sx={{ border: 'solid 1px ', borderRadius: '30px', borderColor: 'secondary' }} size="small">اقرأ المزيد</Button>
          </CardActions>
        </Card>
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/images/banner/nick-morrison-fhnnjk1yj7y-unsplash-3@1x.png"
            style={{ borderRadius: '30px', paddingTop: '2px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div" color='secondary'>
              الأربعاء الموافق 18/8/2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              استضاف صباح اليوم مركز ريادة الأعمال بالجوف i-be د.نعيمة المويشير
              مشرفة مركز الابتكار  وريادة الأعمال بجامعة الجوف  و أ. حسن الغنام
              مدير فرع معهد ريادة الأعمال بالجوف
            </Typography>
          </CardContent>
          <CardActions style={{ float: 'left' }}>
            <Button endIcon={< ArrowLeftIcon />} sx={{ border: 'solid 1px ', borderRadius: '30px', borderColor: 'secondary' }} size="small">اقرأ المزيد</Button>
          </CardActions>
        </Card>
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/images/banner/nick-morrison-fhnnjk1yj7y-unsplash-3@1x.png"
            style={{ borderRadius: '30px', paddingTop: '2px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div" color='secondary'>
              الأربعاء الموافق 18/8/2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              استضاف صباح اليوم مركز ريادة الأعمال بالجوف i-be د.نعيمة المويشير
              مشرفة مركز الابتكار  وريادة الأعمال بجامعة الجوف  و أ. حسن الغنام
              مدير فرع معهد ريادة الأعمال بالجوف
            </Typography>
          </CardContent>
          <CardActions style={{ float: 'left' }}>
            <Button endIcon={< ArrowLeftIcon />} sx={{ border: 'solid 1px ', borderRadius: '30px', borderColor: 'secondary' }} size="small">اقرأ المزيد</Button>
          </CardActions>
        </Card>
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/images/banner/nick-morrison-fhnnjk1yj7y-unsplash-3@1x.png"
            style={{ borderRadius: '30px', paddingTop: '2px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div" color='secondary'>
              الأربعاء الموافق 18/8/2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              استضاف صباح اليوم مركز ريادة الأعمال بالجوف i-be د.نعيمة المويشير
              مشرفة مركز الابتكار  وريادة الأعمال بجامعة الجوف  و أ. حسن الغنام
              مدير فرع معهد ريادة الأعمال بالجوف
            </Typography>
          </CardContent>
          <CardActions style={{ float: 'left' }}>
            <Button endIcon={< ArrowLeftIcon />} sx={{ border: 'solid 1px ', borderRadius: '30px', borderColor: 'secondary' }} size="small">اقرأ المزيد</Button>
          </CardActions>
        </Card>
        </Stack>
      </Box>

  );

}


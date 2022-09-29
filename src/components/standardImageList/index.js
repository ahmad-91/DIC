import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid'

export default function StandardImageList() {
  return (
    <Grid container  display='flex' justifyContent='center' alignItems='center'>
      <Grid item  xs={6} md={9} lg={12}  xl={12} style={{ direction:'rtl'}}>
    <ImageList  cols={8} >
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{margin:'5px', border:'4px dotted' ,padding:'15px'}}>
          <img
            src={`${item.img}?w=164&h=101&auto=format`}
            srcSet={`${item.img}?w=164&h=101&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>
    </Grid>
  );
}

const itemData = [
  {
    img: 'http://www.drwazah.sa/img/16-1x-png@1x.png',
    title: 'Breakfast',
  },
  {
    img: 'http://www.drwazah.sa/img/6-1x-png@1x.png',
    title: 'Burger',
  },
  {
    img: 'http://www.drwazah.sa/img/4-1x-png@1x.png',
    title: 'Camera',
  },
  {
    img: 'http://www.drwazah.sa/img/3-1x-png@1x.png',
    title: 'Coffee',
  },
  {
    img: 'http://www.drwazah.sa/img/2-1x-png@1x.png',
    title: 'Hats',
  },
  {
    img: 'http://www.drwazah.sa/img/1-1x-png@1x.png',
    title: 'Honey',
  },
  {
    img: 'http://www.drwazah.sa/img/file-15-1x-png@1x.png',
    title: 'Basketball',
  },
  {
    img: 'http://www.drwazah.sa/img/9-1x-png@1x.png',
    title: 'Fern',
  },
  {
    img: 'http://www.drwazah.sa/img/14-1x-png@1x.png',
    title: 'Mushrooms',
  },
  {
    img: 'http://www.drwazah.sa/img/10-1x-png@1x.png',
    title: 'Tomato basil',
  },
  {
    img: 'http://www.drwazah.sa/img/11-1x-png@1x.png',
    title: 'Sea star',
  },
  {
    img: 'http://www.drwazah.sa/img/17-1x-png@1x.png',
    title: 'Bike',
  },
  {
    img: 'http://www.drwazah.sa/img/8-1x-png@1x.png',
    title: 'Bike',
  },
  {
    img: '  http://www.drwazah.sa/img/13-1x-png@1x.png',
    title: 'Bike',
  },
  {
    img: '  http://www.drwazah.sa/img/7-1x-png@1x.png',
    title: 'Bike',
  },
  {
    img: 'http://www.drwazah.sa/img/12-1x-png@1x.png',
    title: 'Bike',
  }



];

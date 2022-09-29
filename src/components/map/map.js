import { GoogleMap , useLoadScript,Marker } from "@react-google-maps/api";
import {useMemo} from 'react';
import { Container,Box,Grid } from "@mui/material";
const containerStyle = {
  width: '400px',
  height: '400px'
};
export default function Map(){

  const{isLoaded} = useLoadScript({
    googleMapsApiKey:null,

  });

  if(!isLoaded){
    return <div>
      not loading 
    </div>
  }
  return <Mapdiv />

}

function Mapdiv () {
  return (
    <Grid containerlg={12} md={12} xs={12}>
    <Grid item container lg={12} md={12} xs={12} sx={{  display:'flex', direction:'row', justifyContent:'center',backgroundColor:'#f4f4f4'}}>
    <Box item  lg={12} md={12} xs={12}  sx={{ margin:'1px', backgroundColor:'gray' , width:'100%'}} >
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.4175512530285!2d40.211589070105376!3d29.955421377174456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1572bbe1e3af0583%3A0x33b809a12ad978c2!2z2LTYsdmD2Kkg2K_YsdmI2KfYstmHINin2YTYudmC2KfYsdmK2Kk!5e0!3m2!1sar!2ssa!4v1661983034575!5m2!1sar!2ssa" 
          loading="lazy"  width='100%'  className="iframestyle">


          </iframe>
    </Box>
    </Grid>
    </Grid>
  )
}


 /* <GoogleMap zoom={10} 
  center={{lat:44,lng:-80}}
  style={{width:'100%',height:'100%'}}
  mapContainerClassName={containerStyle} >
  </GoogleMap> */   
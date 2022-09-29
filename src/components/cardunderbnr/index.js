import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Cardbnr from "./cardbnr";

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (

    <>
     
     {matches ? <Cardbnr matches={matches}/> : <Cardbnr matches={matches}/>} 
      
    </>
       
  );
}

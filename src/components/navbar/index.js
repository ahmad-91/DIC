import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (


     
     <NavbarDesktop />
      

       
  );
}

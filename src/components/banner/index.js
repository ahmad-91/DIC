import { Height } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography, Card, CardMedia, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display='flex' alignItems='center' justifyContent='center' >
      <Card >
        <CardMedia
          component="img"
          alt="green iguana"
          image="./images/banner/bannerr.png"
        />
      </Card>
    </Box>
  );
}

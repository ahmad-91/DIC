import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import Navbar from "./components/navbar";
import Cardunderbnr from "./components/cardunderbnr"; 
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import { useEffect } from "react";
import Cardletter from "./components/cardletter/cardletter";
import Secondletter from "./components/cardletter/secondletter"
import Newscard from "./components/newscard/newscard";
import CenterDiv from "./components/newscard/centerdiv";
import Complexgrid from "./components/complexgrid/complexgrid";
import StandardImageList from "./components/standardImageList";
import Contactbar from "./components/appbar/contactbar";
import ContactForm from './components/contactus/contactus';
import Map from './components/map/map';
import Footer from './components/footer'

function App() {
  useEffect(() => {
    document.title = "شركة دروزاة للاستثمار";
  }, []);
  return (
    <div>
    <ThemeProvider theme={theme}>
      
            <Appbar  />
            <Navbar />
            <Banner />
            <Cardunderbnr />
            <Cardletter />
            <Secondletter />
            <CenterDiv align='center' title='آخر الأخبار' />
            <Newscard />
            <CenterDiv align='left' title='استثماراتنا الحالية'/>
            <Complexgrid />
            <CenterDiv align='left' title='مجموعاتنا'/> 
            <StandardImageList />

            <Contactbar />

            <ContactForm />
            <Map />
            <Footer />
            


      
    </ThemeProvider>
    </div>
  );
}

export default App;

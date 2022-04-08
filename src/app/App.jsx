import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ThemeConfig from "../@config/themeConfig/theme";

import Navigation from "./modules/main/Navigation";
import Footer from "./modules/footer/pages/footer";
import GetSky from './modules/get Sky/pages/getSky';
// import Linstview from './modules/main/components/Listnav';

const App = () => {
  return(
    <Router>
        <Navigation />
        <Routes>
          <Route path="/footer" element={<Footer />} />
          <Route path="/getsky" element={<GetSky />} />
          {/* <Route path="/listview" element={<Linstview />} /> */}
        </Routes>
      </Router>
  )
}

const theme = createTheme(ThemeConfig.default)
const CustomTheme = (props) => {
  return (
    <ThemeProvider theme={theme} >
      <App />
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}

export default CustomTheme;
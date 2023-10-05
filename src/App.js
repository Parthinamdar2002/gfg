/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* 
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Author from "pages/LandingPages/Author";
// Material Kit 2 React routes
import routes from "routes";
import AboutUs from "pages/LandingPages/AboutUs";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route && !route.renderLater) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/gfg/blog" element={<Author category="blog" />} />
        <Route path="/gfg/events" element={<Author category="event" />} />
        <Route path="/gfg/team" element={<AboutUs />} />
        <Route path="/gfg" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/404.html" />} />
      </Routes>
    </ThemeProvider>
  );
}

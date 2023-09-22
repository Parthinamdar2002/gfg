/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
/*
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
*/
import { useState } from "react";

function HorizontalTeamCard({ image, name, position, description }) {
  const [click, setClick] = useState(false);
  console.log(position);
  return (
    // eslint-disable-next-line
    <div
      onMouseEnter={() => setClick(true)}
      onMouseLeave={() => setClick(false)}
      onTouchStart={() => setClick(!click)}
      style={{
        width: "15rem",
        height: "24rem",
        background: "linear-gradient(30deg, rgba(255,212,0,1) 0%, rgba(92,83,173,1) 100%)",
        borderRadius: "1rem",
        display: "block",
        overflow: "hidden",
        padding: "0rem",
        boxShadow: click ? "0 0 3rem black" : "",
        transition: "0.3s ease-out",
        transform: click ? "scale(1.1)" : "",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "block",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: click ? "0rem" : "2rem 0.5rem",
            display: "block",
            overflow: "hidden",
            transition: "0.3s ease-out",
            boxSizing: "border-box",
            filter: click ? "blur(20px)" : "",
          }}
        >
          <div
            alt="pfp"
            style={{
              margin: "0.25rem auto",
              display: "block",
              borderRadius: "1000rem",
              boxShadow: "0 0 4px black",
              width: "10rem",
              height: "10rem",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <h2
              style={{
                width: "100%",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "2.5vh",
                margin: "5vh 0",
              }}
            >
              {name}
            </h2>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              left: "0",
            }}
          >
            <hr
              style={{
                margin: "1rem auto",
                border: "none",
                borderTop: "0.3rem dotted black",
                fontFamily: "Poppins",
                width: "80%",
              }}
            />
            <h3 style={{ textAlign: "center", margin: "1rem auto", fontFamily: "Handjet" }}>
              {position.label}
            </h3>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#3d283144",
            padding: "2.5rem",
            // transform: click ? "scale(1.1)" : "",
            transition: "0.3s ease-in",
            borderRadius: "1rem",
            fontFamily: "Roboto Slab",
            justifyContent: "space-between",
            alignItems: "space-between",
            flexDirection: "column",
            color: "#11d9a4",
            top: click ? "0" : "100%",
            transform: "translateZ(20rem)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div width="100%">
            <ul>
              {description.points.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
          </div>
          <div style={{ textAlign: "center" }}>
            <hr
              style={{
                margin: "1rem auto",
                border: "none",
                borderTop: "0.3rem dotted black",
                fontFamily: "Poppins",
              }}
            />
            socials go here
          </div>
        </div>
      </div>
    </div>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HorizontalTeamCard;

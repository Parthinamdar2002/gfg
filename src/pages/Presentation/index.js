/*
=========================================================
* 
=========================================================

* 
* 
 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import advaGFG from "assets/images/GFG_hori_stroke.png";
// import Card from "@mui/material/Card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

/*
// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
*/
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg2.gif";
import bgImage2 from "assets/images/bg1.gif";
import gfgLogo from "assets/images/gfg-logo.png";
import Slider from "./Slider";
// import Spline from "@splinetool/react-spline";

// https://prod.spline.design/KyZHmy1h68qr0uNW/scene.splinecode
import styles from "./Index.module.css";

function Presentation() {
  const [ref, inView] = useInView({});
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/",
          label: "free download",
          color: "info",
        }}
        sticky
        gfgLogo={gfgLogo}
      />
      <MKBox
        minHeight="100vh"
        height="max-content"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "90% 0%",
          backgroundAttachment: "fixed",
          display: "grid",
          placeItems: "center",
          scrollSnapAlign: "center",
        }}
        fontSize="2rem"
        color="unset"
      >
        <div
          style={{
            background: "#d9d9d911",
            height: "max-content",
            width: "min(40rem, 90vw)",
            display: "block",
            padding: "3rem 1rem",
            borderRadius: "2rem",
            backdropFilter: "blur(24px)",
            boxShadow: "0 0 10rem black",
          }}
          className={styles.responsive}
        >
          <Grid container item xs={12} lg={7} alignItems="center" justifyContent="center" mx="auto">
            <img
              alt=""
              src={advaGFG}
              style={{
                width: "100%",
                height: "auto",
                margin: "2rem auto",
                filter: "drop-shadow(0px 0px 20px #fff)",
              }}
            />
            <div
              style={{
                width: "100%",
                color: "black",
                fontFamily: "'JetBrains Mono'",
                fontWeight: "400",
                textAlign: "center",
                fontSize: "0.6em",
              }}
            >
              Of the geeks. For the geeks. By the geeks.
            </div>
          </Grid>
        </div>
      </MKBox>
      <MKBox
        minHeight="100vh"
        height="max-content"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "90% 0%",
          backgroundAttachment: "fixed",
          display: "grid",
          placeItems: "center",
          scrollSnapAlign: "center",
        }}
        fontSize="2rem"
        color="unset"
      >
        <motion.div
          ref={ref}
          initial={{ x: -1000 }}
          style={{
            height: "50vh",
            width: "min(40rem, 90vw)",
            background: "#00000022",
            borderRadius: "1rem",
            position: "relative",
            backdropFilter: "blur(24px)",
            overflow: "hidden",
          }}
          animate={{
            x: inView ? 0 : -100,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "10%",
              width: "100%",
              left: "0",
              top: "0",
              background: "#1d2021",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: " 0 0.5rem",
              margin: "0",
            }}
          >
            <div
              style={{
                borderRadius: "10rem",
                height: "1rem",
                width: "1rem",
                backgroundColor: "#fb4934",
                margin: "0 0.4rem",
              }}
            />
            <div
              style={{
                borderRadius: "10rem",
                height: "1rem",
                width: "1rem",
                backgroundColor: "#fabd2f",
                margin: "0 0.4rem",
              }}
            />
            <div
              style={{
                borderRadius: "10rem",
                height: "1rem",
                width: "1rem",
                backgroundColor: "#98971a",
                margin: "0 0.4rem",
              }}
            />
          </div>
          <div
            style={{
              overflowY: "scroll",
              height: "100%",
            }}
          >
            <h1
              style={{
                fontFamily: "'JetBrains Mono'",
                fontWeight: "800",
                textAlign: "center",
                width: "100%",
                color: "#dddddd",
                fontSize: "clamp(2rem, 6vw, 4rem)",
                padding: "4rem",
                background:
                  "linear-gradient(126deg, rgba(18,128,89,1) 0%, rgba(64,255,187,1) 100%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              One Learns. Many Create.
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono",
                margin: "2rem",
                color: "#d7f2ba",
                fontSize: "0.8em",
                textAlign: "justify",
                padding: "2.5rem",
              }}
            >
              Geeks for Geeks Student Chapter MGMU is a student-led organization that aims to
              promote the culture of coding and technology among young people. GFG MGMU provides
              students with a supportive and inclusive environment where they can learn and develop
              their technical skills, discuss the latest industry trends, network with peers and
              engage in coding challenges.
            </p>
          </div>
        </motion.div>
      </MKBox>
      <Slider />
      <MKBox pt={6} px={1} mt={6} style={{ scrollSnapAlign: "center" }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;

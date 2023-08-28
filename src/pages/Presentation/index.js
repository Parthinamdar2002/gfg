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
// import Card from "@mui/material/Card";
import { useInView } from "react-intersection-observer";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
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
import bgImage from "assets/images/bg-presentation-transformed.jpeg";
import bgImage2 from "assets/images/bg-presentation-2.jpg";
import gfgLogo from "assets/images/gfg-logo.png";
import { motion } from "framer-motion";
// import Spline from "@splinetool/react-spline";

// https://prod.spline.design/KyZHmy1h68qr0uNW/scene.splinecode

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
        padding="10vh 5vw 10vh 5vw"
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
            width: "40vw",
            display: "block",
            padding: "3rem 1rem",
            borderRadius: "2rem",
            backdropFilter: "blur(24px)",
            boxShadow: "0 0 10rem black",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={7}
            alignItems="center"
            justifyContent="center"
            mx="auto"
            marginTop="20vh"
          >
            <MKTypography
              variant="h1"
              color="black"
              mt={-20}
              mb={1}
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              GFGxMGMU
            </MKTypography>
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
        padding="10vh 5vw 10vh 5vw"
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
            minHeight: "60vh",
            height: "max-content",
            width: "70vw",
            background: "#00000022",
            borderRadius: "1rem",
            padding: "3rem",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(24px)",
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
              background: "#1d2021",
              top: "0%",
              left: "0%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: " 0 0.5rem",
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
          <motion.h1
            style={{
              fontFamily: "'JetBrains Mono'",
              fontWeight: "800",
              textAlign: "center",
              width: "100%",
              color: "#dddddd",
            }}
          >
            {"One Learns. Many Create.".split("").map((char, index) => (
              <motion.span
                style={{ display: "inline-block", minWidth: "1rem", fontSize: "3vw", margin: "0" }}
                initial={{ opacity: 0, x: 1000, y: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 1000, y: inView ? 0 : -50 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 25 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p
            style={{
              fontFamily: "'JetBrains Mono",
              margin: "2rem",
              color: "#d7f2ba",
              fontSize: "0.8em",
            }}
          >
            {"We LOVE creating awesome things! You could help our team of playful creators by joining us."
              .split("")
              .map((char, index) => (
                <motion.span
                  style={{ display: "inline-block", minWidth: "1rem" }}
                  initial={{ opacity: 0, x: 1000, y: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 1000, y: inView ? 0 : -50 }}
                  transition={{ delay: index * 0.025, type: "spring", stiffness: 50 }}
                >
                  {char}
                </motion.span>
              ))}
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono",
              margin: "2rem",
              color: "#D6D4A0",
              fontSize: "1em",
              fontWeight: "800",
            }}
          >
            {"gfgJnecTeamCount++".split("").map((char, index) => (
              <motion.span
                style={{ display: "inline-block", minWidth: "1rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: index * 0.025 + 3, type: "spring", stiffness: 50 }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </MKBox>
      <MKBox pt={6} px={1} mt={6} style={{ scrollSnapAlign: "center" }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Tilt } from "react-tilt";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import data from "./TeamData";
// Images
/*
import data from "./TeamData";
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";
*/
function Team() {
  return (
    <MKBox
      component="section"
      style={{
        backgroundImage: "url(https://th.bing.com/th/id/OIG.VwkYgXsfAxmEotaGjKhG?pid=ImgGn",
      }}
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      sx={{
        height: "fit-content",
        width: "100%",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "max-content",
            flexWrap: "wrap",
          }}
        >
          {data.map((member) => {
            console.log(member);
            return (
              <MKBox mb={1} sx={{ margin: "2rem 1rem" }}>
                <Tilt options={{ reverse: true, perspective: 1000, max: 25 }}>
                  <HorizontalTeamCard
                    image={member.img}
                    name={member.Name}
                    position={{ color: "info", label: member.Designation }}
                    description={{
                      points: ["HOHOHO", "hahaha"],
                      socials: { linkedin: "linkedin.com", github: "github.com/the-bokya" },
                    }}
                  />
                </Tilt>
              </MKBox>
            );
          })}
        </div>
      </Container>
    </MKBox>
  );
}

export default Team;

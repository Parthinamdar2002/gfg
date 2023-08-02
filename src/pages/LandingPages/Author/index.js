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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "pages/LandingPages/Author/sections/Footer";

// Proptypes
import { PropTypes } from "prop-types";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

import { useEffect, useState } from "react";

function isBlog(posts, category) {
  console.log("meowww", Object.keys(posts[0].categories).includes(category), category);

  const out = posts.filter((post) => Object.keys(post.categories).includes(category));

  console.log("meowwwest", out);
  return out;
}
function Author(props) {
  console.log(props);
  const { category } = props;
  const [current, setCurrent] = useState("you failed!");
  const [posts, setPosts] = useState([]);
  const [otherPosts, setOtherPosts] = useState([]);
  useEffect(() => {
    console.log("p", posts);
    setCurrent(posts[0]);
  }, [posts]);
  useEffect(() => {
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/thebokya.wordpress.com/posts/")
      .then((res) => res.json())
      .then((res) => isBlog(res.posts, category))
      .then((res) => {
        setPosts(res);
      });
  }, []);
  useEffect(() => {
    setOtherPosts(
      posts.filter((e) => {
        console.log("bhow", e.ID, current.ID);
        return e.ID !== current.ID;
      })
    );
    window.scrollTo(0, 0, "smooth");
  }, [current]);
  console.log("hahaha", current);
  console.log("hahaha", current);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile current={current} />
          <Posts posts={otherPosts} setCurrent={setCurrent} />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

Author.defaultProps = {
  category: "blog",
};

Author.propTypes = {
  category: PropTypes.string,
};

export default Author;

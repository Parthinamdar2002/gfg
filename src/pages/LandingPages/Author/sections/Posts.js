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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
/*
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";
*/

import PropTypes from "prop-types";

function Posts(props) {
  const { posts, setCurrent } = props;

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check my latest blogposts
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {posts.map((post) => (
            // eslint-disable-next-line
            <Grid item xs={12} sm={6} lg={3} onClick={() => setCurrent(post)}>
              <TransparentBlogCard
                image={post.featured_image}
                title={post.title}
                description={post.excerpt}
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}
Posts.defaultProps = {
  posts: [{}],
  setCurrent: [],
};
Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  setCurrent: PropTypes.func,
};

export default Posts;

import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid2 as Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return posts.length > 0 ? (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} size={{ xs: 12, sm: 6 }}>
          <Item sx={{ borderRadius: "20px" }}>
            <Post post={post} />
          </Item>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography>No Memories Added yet</Typography>
  );
};

export default Posts;

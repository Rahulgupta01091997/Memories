import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { CircularProgress } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  background: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = false;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: "15px !important",
          margin: "20px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: "#487346",
            fontWeight: "200",
          }}>
          Memories
        </Typography>
        <img
          src={memories}
          alt="memories"
          height="60"
          style={{
            marginLeft: "15px",
          }}
        />
      </AppBar>
      <Grow in>
        <Container sx={{ padding: "0px" }}>
          <Grid2
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}>
            <Grid2 size={{ xs: 12, sm: 7 }}>
              <Item
                sx={{ textAlign: "left", boxShadow: "none", color: "black" }}>
                <Posts />
              </Item>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <Item
                sx={{ textAlign: "left", boxShadow: "none", color: "black" }}>
                <Form />
              </Item>
            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

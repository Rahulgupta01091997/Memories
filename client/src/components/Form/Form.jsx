import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });
  const post = useSelector((state) =>
    state.posts.find((post) => currentId === post._id)
  );
  const dispatch = useDispatch();
  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: "", title: "", message: "", tags: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId === null) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <Paper sx={{ padding: 2 }}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        <Typography variant="h6">
          {currentId ? `Editing a memory` : "Creating a memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          sx={{ marginTop: "10px" }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          sx={{ marginTop: "10px" }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          sx={{ marginTop: "10px" }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          sx={{ marginTop: "10px" }}
        />
        <Button
          sx={{ margin: "20px 0px 10px" }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

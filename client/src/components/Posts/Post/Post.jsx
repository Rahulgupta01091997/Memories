import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
        boxShadow: "none",
        margin: "10px",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <div style={{ width: "80%", textAlign: "left", paddingRight: "5px" }}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div style={{ width: "20%", textAlign: "center" }}>
          <Button
            style={{ color: "black" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}>
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0px 20px 0px",
        }}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        style={{ textAlign: "left", wordWrap: "break-word" }}
        variant="h5"
        gutterBottom>
        {post.title}
      </Typography>
      <CardContent sx={{ padding: "0px", marginBottom: "10px" }}>
        <Typography
          style={{ textAlign: "left", wordWrap: "break-word" }}
          variant="h5"
          gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "0px",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

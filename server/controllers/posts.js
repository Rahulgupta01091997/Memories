import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const postBody = req.body;
  const newPost = new PostMessage(postBody);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, tags, creator } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post With That Id");

  const updatedPost = { title, message, tags, creator, _id: id };

  const response = await PostMessage.findByIdAndUpdate(id, updatedPost, {
    new: true,
  });
  console.log("success");

  res.status(201).send(response);
};

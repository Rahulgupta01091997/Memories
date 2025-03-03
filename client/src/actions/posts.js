import * as api from "../api";
import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_ALL_POST,
} from "../utils/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, post);
    dispatch({ type: UPDATE_POST, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const response = await api.likePost(id);
    dispatch({ type: UPDATE_POST, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

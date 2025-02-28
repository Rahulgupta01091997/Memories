import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, post);
    dispatch({ type: "UPDATE_POST", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_ALL_POST,
} from "../utils/actionTypes";
const initialState = [];

const reducer = (posts = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;

import * as api from "../api";

// Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log("error in line 10", error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log("data in line 17", data);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("error in line 19", error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log("data in line 26", data);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log("error in line 29", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log("error in line 39", error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log("errorin line 48", error);
  }
};

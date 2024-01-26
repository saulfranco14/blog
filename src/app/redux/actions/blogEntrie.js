import clientAxios from "@/app/config/axios";
import {
  CREATE_BLOG_ERROR,
  CREATE_BLOG_LOADING,
  CREATE_BLOG_SUCCESS,
} from "@/app/redux/type/blogEntrie";

/**
 * Actions and asynchronous functions for creating blog entries.
 * These actions and functions interact with the API to create new blog entries.
 */

/**
 * Action to set the loading state while creating a blog entry.
 * @returns {Object} Action object with type CREATE_BLOG_LOADING.
 */
export const initCreateBlogEntrie = () => ({
  type: CREATE_BLOG_LOADING,
});

/**
 * Action to handle the successful creation of a blog entry.
 * @param {Object} data Data of the created blog entry.
 * @returns {Object} Action object with type CREATE_BLOG_SUCCESS and blog entry data.
 */
export const successCreateBlogEntrie = (data) => ({
  type: CREATE_BLOG_SUCCESS,
  payload: data,
});

/**
 * Action to handle an error during the creation of a blog entry.
 * @param {Object} error Error object caught.
 * @returns {Object} Action object with type CREATE_BLOG_ERROR and the caught error.
 */
export const errorCreateBlogEntrie = (error) => ({
  type: CREATE_BLOG_ERROR,
  payload: error,
});

/**
 * Asynchronous function to create a new blog entry.
 * Makes a POST request to the API with the provided data.
 * @param {Object} data Blog entry data to be created.
 * @returns {Function} Function that accepts dispatch as an argument to handle Redux state.
 */
export function fnCreateBlogEntrie(data) {
  return async (dispatch) => {
    dispatch(initCreateBlogEntrie());
    try {
      // Make POST request to the API with the provided data as the request body
      const response = await clientAxios.post(`/blog-entries/`, data);
      dispatch(successCreateBlogEntrie(response.data));
    } catch (error) {
      // Dispatch error action and display an alert
      console.error("Error: ", error);
      dispatch(errorCreateBlogEntrie(error));
    }
  };
}

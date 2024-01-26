import clientAxios from "@/app/config/axios";
import {
  CREATE_USER_ERROR,
  CREATE_USER_LOADING,
  CREATE_USER_SUCCESS,
} from "@/app/redux/type/user";

/**
 * Actions and asynchronous functions for creating users.
 * These actions and functions interact with the API to create new users.
 */

/**
 * Action to set the loading state while creating a user.
 * @returns {Object} Action object with type CREATE_USER_LOADING.
 */
export const initCreateUser = () => ({
  type: CREATE_USER_LOADING,
});

/**
 * Action to handle the successful creation of a user.
 * @param {Object} data Data of the created user.
 * @returns {Object} Action object with type CREATE_USER_SUCCESS and user data.
 */
export const successCreateUser = (data) => ({
  type: CREATE_USER_SUCCESS,
  payload: data,
});

/**
 * Action to handle an error during the creation of a user.
 * @param {Object} error Error object caught.
 * @returns {Object} Action object with type CREATE_USER_ERROR and the caught error.
 */
export const errorCreateUser = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

/**
 * Asynchronous function to create a new user.
 * Makes a POST request to the API with the provided data.
 * @param {Object} data User data to create.
 * @returns {Function} Function that accepts dispatch as an argument to handle Redux state.
 */
export function fnCreateUser(data) {
  return async (dispatch) => {
    dispatch(initCreateUser());
    try {
      // Make POST request to the API with the provided data as the request body
      const response = await clientAxios.post(`/user/`, data);
      dispatch(successCreateUser(response.data));
    } catch (error) {
      // Dispatch error action and display an alert
      console.error("Error: ", error);
      dispatch(errorCreateUser(error));
    }
  };
}

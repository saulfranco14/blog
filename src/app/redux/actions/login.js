import clientAxios from "@/app/config/axios";
import { toast } from "react-toastify";

import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  CREATE_LOGIN_ERROR,
  CREATE_LOGIN_LOADING,
  CREATE_LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  VERIFY_LOGIN_ERROR,
  VERIFY_LOGIN_LOADING,
  VERIFY_LOGIN_SUCCESS,
} from "@/app/redux/type/login";

/**
 * Initiates the authentication login process.
 * @returns {Object} Redux action object.
 */
export const initAuthLogin = () => ({
  type: AUTH_LOGIN_LOADING,
});

/**
 * Handles successful authentication login.
 * @param {Object} userData User data received upon successful authentication.
 * @returns {Object} Redux action object.
 */
export const authSuccessLogin = (userData) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: userData,
});

/**
 * Handles errors that occur during the authentication login process.
 * @param {Object} error Error object.
 * @returns {Object} Redux action object.
 */
export const authErrorLogin = (error) => ({
  type: AUTH_LOGIN_ERROR,
  payload: error,
});

/**
 * Performs an asynchronous login operation.
 * @param {Object} userData( user_login, password_login ) User credentials for login.
 * @returns {Function} Redux thunk function.
 */
export function fnAuthLogin(userData) {
  return async (dispatch) => {
    dispatch(initAuthLogin());
    try {
      const response = await clientAxios.post("/login/authenticate", userData);
      dispatch(authSuccessLogin(response.data.token));
    } catch (error) {
      toast.error("Tus datos fueron incorrectos, intente de nuevo.", {
        theme: "colored",
      });
      dispatch(authErrorLogin(error));
    }
  };
}

/**
 * Initiates the user account creation process.
 * @returns {Object} Redux action object.
 */
export const createLoginLoading = () => ({
  type: CREATE_LOGIN_LOADING,
});

/**
 * Handles successful user account creation.
 * @param {Object} userData User data received upon successful account creation.
 * @returns {Object} Redux action object.
 */
export const createLoginSuccess = (userData) => ({
  type: CREATE_LOGIN_SUCCESS,
  payload: userData,
});

/**
 * Handles errors that occur during the account creation process.
 * @param {Object} error Error object.
 * @returns {Object} Redux action object.
 */
export const createLoginError = (error) => ({
  type: CREATE_LOGIN_ERROR,
  payload: error,
});

/**
 * Performs an asynchronous user account creation operation.
 * @param {Object} userData(user_login, password_login, id_role) Data for creating a new user account.
 * @returns {Function} Redux thunk function.
 */
export function fnCreateLogin(userData) {
  return async (dispatch) => {
    dispatch(createLoginLoading());
    try {
      const response = await clientAxios.post("/login/", userData);
      dispatch(createLoginSuccess(response.data));
    } catch (error) {
      dispatch(createLoginError(error));
    }
  };
}

/**
 * Initiates the login verification process.
 * @returns {Object} Redux action object.
 */
export const verifyLoginLoading = () => ({
  type: VERIFY_LOGIN_LOADING,
});

/**
 * Handles successful login verification.
 * @param {Object} userData User data received upon successful verification.
 * @returns {Object} Redux action object.
 */
export const verifyLoginSuccess = (userData) => ({
  type: VERIFY_LOGIN_SUCCESS,
  payload: userData,
});

/**
 * Handles errors that occur during the login verification process.
 * @param {Object} error Error object.
 * @returns {Object} Redux action object.
 */
export const verifyLoginError = (error) => ({
  type: VERIFY_LOGIN_ERROR,
  payload: error,
});

/**
 * Performs an asynchronous login verification operation.
 * @param {string} token Authentication token for verification.
 * @returns {Function} Redux thunk function.
 */
export function fnVerifyLogin(token) {
  return async (dispatch) => {
    dispatch(verifyLoginLoading());
    try {
      const response = await clientAxios.get(`/login/verify-token?token=${token}`);
      dispatch(verifyLoginSuccess(response.data));
    } catch (error) {
      dispatch(verifyLoginError(error));
    }
  };
}

/**
 * Logs out the current user.
 * @returns {Object} Redux action object.
 */
export const logout = () => ({
  type: LOGOUT_SUCCESS,
});

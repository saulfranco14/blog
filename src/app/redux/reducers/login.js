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

const initialState = {
  login: "",
  profile: {},
  create: {},
  auth: {},
  verify: {},
  loading: {
    auth: false,
    create: false,
    verify: false,
  },
  error: {
    auth: false,
    create: false,
    verify: false,
  },
  status: {
    auth: false,
    create: false,
    verify: false,
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          auth: true,
        },
        error: {
          ...state.error,
          auth: false,
        },
        status: {
          ...state.status,
          auth: false,
        },
      };

    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          auth: false,
        },
        error: {
          ...state.error,
          auth: action.payload,
        },
        status: {
          ...state.status,
          auth: action.status,
        },
      };

    case AUTH_LOGIN_SUCCESS:
      sessionStorage.setItem("login", action.payload);
      return {
        ...state,
        loading: {
          ...state.loading,
          auth: false,
        },
        error: {
          ...state.error,
          auth: false,
        },
        status: {
          ...state.status,
          auth: action.status,
        },
        login: action.payload,
      };

    case LOGOUT_SUCCESS:
      document.cookie =
        "sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      sessionStorage.removeItem("login");
      return {
        ...initialState,
      };

    case VERIFY_LOGIN_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          verify: true,
        },
        error: {
          ...state.error,
          verify: false,
        },
        status: {
          ...state.status,
          verify: false,
        },
      };

    case VERIFY_LOGIN_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          verify: false,
        },
        error: {
          login: false,
          verify: action.payload,
        },
        status: {
          ...state.status,
          verify: action.status,
        },
      };

    case VERIFY_LOGIN_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          verify: false,
        },
        error: {
          ...state.error,
          verify: false,
        },
        status: {
          ...state.status,
          verify: action.status,
        },
        profile: action.payload,
      };

    case CREATE_LOGIN_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          create: true,
        },
        error: {
          ...state.error,
          create: false,
        },
        status: {
          ...state.status,
          create: false,
        },
      };

    case CREATE_LOGIN_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          create: false,
        },
        error: {
          login: false,
          create: action.payload,
        },
        status: {
          ...state.status,
          create: action.status,
        },
      };

    case CREATE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          create: false,
        },
        error: {
          ...state.error,
          create: false,
        },
        status: {
          ...state.status,
          create: action.status,
        },
        create: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;

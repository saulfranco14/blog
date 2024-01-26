import {
  CREATE_USER_ERROR,
  CREATE_USER_LOADING,
  CREATE_USER_SUCCESS,
} from "@/app/redux/type/user";

const initialState = {
  user: {},
  loading: {
    create: false,
  },
  error: {
    create: false,
  },
  status: {
    create: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_LOADING:
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

    case CREATE_USER_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          create: false,
        },
        error: {
          ...state.error,
          create: action.payload,
        },
        status: {
          ...state.status,
          create: action.status,
        },
      };

    case CREATE_USER_SUCCESS:
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
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

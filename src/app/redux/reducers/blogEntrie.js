import {
  CREATE_BLOG_ERROR,
  CREATE_BLOG_LOADING,
  CREATE_BLOG_SUCCESS,
} from "@/app/redux/type/blogEntrie";

const initialState = {
  blogEntrie: {},
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

const blogEntrieReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BLOG_LOADING:
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

    case CREATE_BLOG_ERROR:
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

    case CREATE_BLOG_SUCCESS:
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
        blogEntrie: action.payload,
      };

    default:
      return state;
  }
};

export default blogEntrieReducer;

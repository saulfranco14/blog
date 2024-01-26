import {
  CREATE_BLOG_ERROR,
  CREATE_BLOG_LOADING,
  CREATE_BLOG_SUCCESS,
  ALL_BLOG_ERROR,
  ALL_BLOG_LOADING,
  ALL_BLOG_SUCCESS,
} from "@/app/redux/type/blogEntrie";

const initialState = {
  blogEntrie: {},
  allBlogEntries: [],
  loading: {
    create: false,
    all: false,
  },
  error: {
    create: false,
    all: false,
  },
  status: {
    create: false,
    all: false,
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

    case ALL_BLOG_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          all: true,
        },
        error: {
          ...state.error,
          all: false,
        },
        status: {
          ...state.status,
          all: false,
        },
      };

    case ALL_BLOG_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          all: false,
        },
        error: {
          ...state.error,
          all: action.payload,
        },
        status: {
          ...state.status,
          all: action.status,
        },
      };

    case ALL_BLOG_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          all: false,
        },
        error: {
          ...state.error,
          all: false,
        },
        status: {
          ...state.status,
          all: action.status,
        },
        allBlogEntries: action.payload,
      };

    default:
      return state;
  }
};

export default blogEntrieReducer;

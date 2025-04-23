import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getBlogById,
  getBlogComments,
  getBlogsCategories,
  getBlogsList,
} from '../core/services/blogs';

const perPage = 8;
export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().blogs;
    const { news, totalCount } = await getBlogsList({
      RowsOfPage: perPage,
      PageNumber: state.currentPage,
      SortingCol: state.sorting,
      SortType: state.sortingType,
      Query: state.query ? state.query : null,
      NewsCategoryId: state.categoryId ? state.categoryId : null,
    });
    return { news, totalCount };
  },
);

export const fetchBlogCategories = createAsyncThunk(
  'blogs/fetchBlogCategories',
  async () => {
    return await getBlogsCategories();
  },
);

export const fetchBlogDetail = createAsyncThunk(
  'blog/fetchBlogDetail',
  async (params) => {
    const { detailsNewsDto } = await getBlogById(params);
    return { detailsNewsDto };
  },
);

export const fetchBlogComments = createAsyncThunk(
  'blog/fetchBlogComments',
  async (params) => {
    return await getBlogComments({
      NewsId: params
    });
  },
);


export const fetchRelatedBlogs = createAsyncThunk(
  'blogs/fetchRelatedBlogs',
  async (params) => {
    const { news } = await getBlogsList({
      NewsCategoryId: params,
    });
    return { news };
  },
);

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    loading: false,
    currentPage: 1,
    sorting: 'insertDate',
    sortingType: 'DESC',
    query: null,
    totalBlogs: 1,
    categories: [],
    categoryId: null,
    blogDetail: {},
    blogComments: [],
    relatedBlogs: [],
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
    setSortingType: (state, action) => {
      state.sortingType = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    updateBlogCommentLikeCount: (state, action) => {
      const { commentId, type, currentUserIsDissLike, currentUserIsLike } = action.payload;
      const comment = state.blogComments.find(c => c.id === commentId);
      if (comment) {
        if (type === 'like' && currentUserIsDissLike && currentUserIsLike == false) {
          comment.likeCount += 1;
          comment.dissLikeCount -= 1;
          comment.currentUserIsLike = true
          comment.currentUserIsDissLike = false
        } else if (type === 'dissLike' && currentUserIsLike && currentUserIsDissLike == false) {
          comment.dissLikeCount += 1;
          comment.likeCount -= 1;
          comment.currentUserIsDissLike = true
          comment.currentUserIsLike = false
        }
        else if (type === 'like' && currentUserIsDissLike == false && currentUserIsLike == false) {
          comment.likeCount += 1;
          comment.currentUserIsLike = true
          comment.currentUserIsDissLike = false
        }
        else if (type === 'dissLike' && currentUserIsDissLike == false && currentUserIsLike == false) {
          comment.dissLikeCount += 1;
          comment.currentUserIsLike = false
          comment.currentUserIsDissLike = true
        }
      }
    },
    updateBlogRate: (state, action) => {
      const { rateNumber } = action.payload
      state.blogDetail.currentUserRateNumber = rateNumber
    },
    updateBlogFavorite: (state, action) => {
      const { favStatus } = action.payload
      state.blogDetail.isCurrentUserFavorite = favStatus
    },
    updateBlogLike: (state, action) => {
      const { type, currentUserIsLike, currentUserIsDissLike } = action.payload
      if (type == 'like' && currentUserIsLike == false && currentUserIsDissLike == true) {
        state.blogDetail.currentUserIsLike = true
        state.blogDetail.currentUserIsDissLike = false
        state.blogDetail.currentLikeCount += 1
        state.blogDetail.currentDissLikeCount -= 1
      }
      else if (type == 'dislike' && currentUserIsLike == true && currentUserIsDissLike == false) {
        state.blogDetail.currentUserIsLike = false
        state.blogDetail.currentUserIsDissLike = true
        state.blogDetail.currentLikeCount -= 1
        state.blogDetail.currentDissLikeCount += 1
      }
      else if (type == 'like' && currentUserIsLike == false && currentUserIsDissLike == false) {
        state.blogDetail.currentUserIsLike = true
        state.blogDetail.currentLikeCount += 1
      }
      else if (type == 'dislike' && currentUserIsLike == false && currentUserIsDissLike == false) {
        state.blogDetail.currentUserIsDissLike = true
        state.blogDetail.currentDissLikeCount += 1
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.news;
        state.totalBlogs = action.payload.totalCount;
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchBlogCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchBlogDetail.pending, (state) => {
        state.blogDetail = {}
        state.loading = true;
      })
      .addCase(fetchBlogDetail.fulfilled, (state, action) => {
        state.blogDetail = action.payload.detailsNewsDto;
        state.loading = false;
      })
      .addCase(fetchBlogDetail.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.relatedBlogs = [];
        state.loading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.relatedBlogs = action.payload;
        state.loading = false;
      })
      .addCase(fetchRelatedBlogs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchBlogComments.pending, (state) => {
        state.blogComments = [];
        state.loading = true;
      })
      .addCase(fetchBlogComments.fulfilled, (state, action) => {
        state.blogComments = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogComments.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const {
  setCurrentPage,
  setSorting,
  setSortingType,
  setQuery,
  setCategory,
  updateBlogCommentLikeCount,
  updateBlogRate,
  updateBlogFavorite,
  updateBlogLike
} = blogSlice.actions;
export default blogSlice.reducer;

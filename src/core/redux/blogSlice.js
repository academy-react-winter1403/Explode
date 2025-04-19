import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogById, getBlogsCategories, getBlogsList } from '../services/blogs';

const perPage = 8
export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBlogs",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState().blogs;
        const { news, totalCount } = await getBlogsList({
            RowsOfPage: perPage,
            PageNumber: state.currentPage,
            SortingCol: state.sorting,
            SortType: state.sortingType,
            Query: state.query ? state.query : null,
            NewsCategoryId: state.categoryId ? state.categoryId : null
        })
        return { news, totalCount }
    }
)

export const fetchBlogCategories = createAsyncThunk(
    "blogs/fetchBlogCategories",
    async () => {
        return await getBlogsCategories()
    }
)

export const fetchBlogDetail = createAsyncThunk(
    "blog/fetchBlogDetail",
    async (params) => {
        const { detailsNewsDto, commentDtos } = await getBlogById(params)
        return { detailsNewsDto, commentDtos }
    }
)

export const fetchRelatedBlogs = createAsyncThunk(
    "blogs/fetchRelatedBlogs",
    async (params) => {
        const { news } = await getBlogsList({
            NewsCategoryId: params
        })
        return { news }
    }
)

const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs: [],
        loading: false,
        currentPage: 1,
        sorting: "insertDate",
        sortingType: "DESC",
        query: null,
        totalBlogs: 1,
        categories: [],
        categoryId: null,
        blogDetail: {},
        blogComments: [],
        relatedBlogs: []
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
                state.loading = true;
            })
            .addCase(fetchBlogDetail.fulfilled, (state, action) => {
                state.blogDetail = action.payload.detailsNewsDto;
                state.blogComments = action.payload.commentDtos;
                state.loading = false;
            })
            .addCase(fetchBlogDetail.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchRelatedBlogs.pending, (state) => {
                state.relatedBlogs = []
                state.loading = true;
            })
            .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
                state.relatedBlogs = action.payload
                state.loading = false;
            })
            .addCase(fetchRelatedBlogs.rejected, (state) => {
                state.loading = false;
            })
    }


})
export const {
    setCurrentPage,
    setSorting,
    setSortingType,
    setQuery,
    setCategory
} = blogSlice.actions
export default blogSlice.reducer
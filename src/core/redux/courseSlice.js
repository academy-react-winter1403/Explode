import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories, getCoursesWithPagination, getLevels } from "../services/courses";
import { getTeacherCountReports } from "../services/userStatisticsReport";

const perPage = 12
const categoryCount = 1
export const fetchCourses = createAsyncThunk(
    "courses/fetchCourses",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState().courses;
        const { courseFilterDtos, totalCount } = await getCoursesWithPagination({
            RowsOfPage: perPage,
            PageNumber: state.currentPage,
            SortingCol: state.sorting,
            SortType: state.sortingType,
            Query: state.query ? state.query : null,
            TechCount: state.category ? categoryCount : null,
            ListTech: state.category || null,
            courseLevelId: state.levelId || null,
            TeacherId: state.teacherId || null,
            CostDown: state.costDown,
            CostUp: state.costUp,
            StartDate: state.startDate || null,
            EndDate: state.endDate || null,
        })
        return { courseFilterDtos, totalCount }
    }
)

export const fetchCategories = createAsyncThunk(
    "courses/fetchCategories",
    async () => { return await getCategories() }
)

export const fetchLevels = createAsyncThunk(
    "course/fetchLevels",
    async () => { return await getLevels(); });

export const fetchTeachers = createAsyncThunk(
    "course/fetchTeachers",
    async () => { return await getTeacherCountReports() }
);

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
        loading: false,
        totalCourses: 1,
        currentPage: 1,
        sorting: "lastUpdate",
        sortingType: "DESC",
        query: null,
        categories: [],
        category: null,
        courseLevels: [],
        levelId: null,
        teacherId: null,
        teachers: [],
        costDown: 0,
        costUp: 2000000000,
        startDate: null,
        endDate: null,
        responsiveFilter: false,
        responsiveSorting: false,
        courseCategories: []
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
            state.category = action.payload;
        },
        setLevelId: (state, action) => {
            state.levelId = action.payload;
        },
        setTeacherId: (state, action) => {
            state.teacherId = action.payload;
        },
        setCostDown: (state, action) => {
            state.costDown = action.payload;
        },
        setCostUp: (state, action) => {
            state.costUp = action.payload;
        },
        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        },
        setResponsiveFilter: (state, action) => {
            state.responsiveFilter = action.payload;
        },
        setResponsiveSorting: (state, action) => {
            state.responsiveSorting = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.courses = action.payload.courseFilterDtos;
                state.totalCourses = action.payload.totalCount;
                state.loading = false;
            })
            .addCase(fetchCourses.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.courseCategories = action.payload;
            })
            .addCase(fetchLevels.fulfilled, (state, action) => {
                state.courseLevels = action.payload;
            })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.teachers = action.payload;
            });
    },

})
export const {
    setCurrentPage,
    setSorting,
    setSortingType,
    setQuery,
    setCategory,
    setLevelId,
    setTeacherId,
    setCostDown,
    setCostUp,
    setStartDate,
    setEndDate,
    setResponsiveFilter,
    setResponsiveSorting,
} = coursesSlice.actions;

export default coursesSlice.reducer
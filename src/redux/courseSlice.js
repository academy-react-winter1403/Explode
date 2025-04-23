import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  getCourseComments,
  getCourseDetail,
  getCoursesWithPagination,
  getLevels,
} from '../core/services/courses';
import { getTeacherCountReports } from '../core/services/userStatisticsReport';

const perPage = 12;
const categoryCount = 1;
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
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
    });
    return { courseFilterDtos, totalCount };
  },
);

export const fetchCategories = createAsyncThunk(
  'courses/fetchCategories',
  async () => {
    return await getCategories();
  },
);

export const fetchLevels = createAsyncThunk('courses/fetchLevels', async () => {
  return await getLevels();
});

export const fetchTeachers = createAsyncThunk(
  'courses/fetchTeachers',
  async () => {
    return await getTeacherCountReports();
  },
);

export const fetchCourseDetail = createAsyncThunk(
  'course/fetchCourseDetail',
  async (params) => {
    return await getCourseDetail({
      CourseId: params,
    });
  },
);

export const fetchCourseComments = createAsyncThunk(
  'course/fetchCourseComments',
  async (params) => {
    return await getCourseComments(params);
  },
);

export const fetchRelatedCourses = createAsyncThunk(
  'course/fetchRelatedCourses',
  async (params) => {
    const { courseFilterDtos } = await getCoursesWithPagination({
      RowsOfPage: 5,
      TeacherId: params,
    });
    return { courseFilterDtos };
  },
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    loading: false,
    totalCourses: 1,
    currentPage: 1,
    sorting: 'lastUpdate',
    sortingType: 'DESC',
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
    courseCategories: [],
    courseDetail: {},
    courseComments: [],
    relatedCourses: [],
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
    updateCourseCommentLikeCount: (state, action) => {
      const { commentId, type, currentEmotion } = action.payload;
      const comment = state.courseComments.find(c => c.id === commentId);
      if (comment) {
        if (type === 'like' && currentEmotion == "DISSLIKED") {
          comment.likeCount += 1;
          comment.disslikeCount -= 1;
          comment.currentUserEmotion = 'LIKED'
        } else if (type === 'dissLike' && currentEmotion == "LIKED") {
          comment.disslikeCount += 1;
          comment.likeCount -= 1;
          comment.currentUserEmotion = 'DISSLIKED'
        }
        else if (type === 'like' && currentEmotion == "-") {
          comment.likeCount += 1;
          comment.currentUserEmotion = 'LIKED'
        }
        else if (type === 'dissLike' && currentEmotion == "-") {
          comment.disslikeCount += 1;
          comment.currentUserEmotion = 'DISSLIKED'
        }
      }
    },
    updateCourseRate: (state, action) => {
      const { rateNumber } = action.payload
      state.courseDetail.currentUserRateNumber = rateNumber
    },
    updateFavorite: (state, action) => {
      const { favStatus } = action.payload
      state.courseDetail.isUserFavorite = favStatus
    },
    updateCourseLike: (state, action) => {
      const { type, currentUserLike, currentUserDissLike } = action.payload
      if (type == 'like' && currentUserLike == "0" && currentUserDissLike == "1") {
        state.courseDetail.currentUserLike = "1"
        state.courseDetail.currentUserDissLike = "0"
        state.courseDetail.likeCount += 1
        state.courseDetail.dissLikeCount -= 1
      }
      else if (type == 'dislike' && currentUserLike == "1" && currentUserDissLike == "0") {
        state.courseDetail.currentUserLike = "0"
        state.courseDetail.currentUserDissLike = "1"
        state.courseDetail.likeCount -= 1
        state.courseDetail.dissLikeCount += 1
      }
      else if (type == 'like' && currentUserLike == "0" && currentUserDissLike == "0") {
        state.courseDetail.currentUserLike = "1"
        state.courseDetail.likeCount += 1
      }
      else if (type == 'dislike' && currentUserLike == "0" && currentUserDissLike == "0") {
        state.courseDetail.currentUserDissLike = "1"
        state.courseDetail.dissLikeCount += 1
      }
    }
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
      })
      .addCase(fetchCourseDetail.pending, (state) => {
        state.courseDetail = {};
        state.loading = true;
      })
      .addCase(fetchCourseDetail.fulfilled, (state, action) => {
        state.courseDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourseDetail.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchCourseComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourseComments.fulfilled, (state, action) => {
        state.courseComments = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourseComments.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchRelatedCourses.pending, (state) => {
        state.relatedCourses = [];
        state.loading = true;
      })
      .addCase(fetchRelatedCourses.fulfilled, (state, action) => {
        state.relatedCourses = action.payload.courseFilterDtos;
        state.loading = false;
      })
      .addCase(fetchRelatedCourses.rejected, (state) => {
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
  setLevelId,
  setTeacherId,
  setCostDown,
  setCostUp,
  setStartDate,
  setEndDate,
  setResponsiveFilter,
  setResponsiveSorting,
  updateCourseCommentLikeCount,
  updateCourseRate,
  updateFavorite,
  updateCourseLike
} = coursesSlice.actions;

export default coursesSlice.reducer;

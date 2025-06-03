import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  getCourseComments,
  getCourseDetail,
  getCourseReplies,
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
  'comments/fetchCourseComments',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().courses;
    const response = await getCourseComments(state.courseId);
    return response
  }
);


export const fetchCourseReplies = createAsyncThunk(
  'comments/fetchCourseReplies',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().courses;
    const response = await getCourseReplies(state.courseId, state.commentId);
    const commentId = state.commentId
    return { commentId, replies: response };
  }
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
    relatedCourses: [],
    courseId: null,
    commentId: null,
    allComments: [],
    mainComments: []
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
    setCommentId: (state, action) => {
      state.commentId = action.payload;
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
    },

    updateCommentReaction: (state, action) => {
      const { commentId, type } = action.payload;

      const updateComment = (comments) => {
        return comments.map((comment) => {
          if (comment.id === commentId) {
            let updatedComment = { ...comment };
            if (type === 'like') {
              updatedComment.likeCount = (comment.likeCount || 0) + 1;
              updatedComment.currentUserEmotion = 'LIKED';
              if (comment.disslikeCount > 0) {
                updatedComment.disslikeCount = comment.disslikeCount - 1;
              }
            } else if (type === 'dislike') {
              updatedComment.disslikeCount = (comment.disslikeCount || 0) + 1;
              updatedComment.currentUserEmotion = 'DISSLIKED';
              if (comment.likeCount > 0) {
                updatedComment.likeCount = comment.likeCount - 1;
              }
            }
            return updatedComment;
          }
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateComment(comment.replies),
            };
          }
          return comment;
        });
      };

      state.mainComments = updateComment(state.mainComments);
      state.allComments = updateComment(state.allComments);
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
      })

      .addCase(fetchCourseComments.fulfilled, (state, action) => {
        state.mainComments = action.payload;
        state.allComments = action.payload.map((comment) => ({
          ...comment,
          replies: [],
        }));
      })

      .addCase(fetchCourseReplies.fulfilled, (state, action) => {
        const { commentId, replies } = action.payload;

        const updateReplies = (comments, commentId, newReplies) => {
          return comments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: newReplies.map((reply) => ({
                  ...reply,
                  replies: [],
                })),
              };
            }
            if (comment.replies.length > 0) {
              return {
                ...comment,
                replies: updateReplies(comment.replies, commentId, newReplies),
              };
            }
            return comment;
          });
        };

        state.allComments = updateReplies(state.allComments, commentId, replies);
      })

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
  updateCourseLike,
  setCourseId,
  setCommentId,
  updateCommentReaction
} = coursesSlice.actions;

export default coursesSlice.reducer;

// stores/courseStore.js
import { create } from 'zustand';

import { getTeacherCountReports } from '../core/services/userStatisticsReport';
import {
  getCategories,
  getCoursesWithPagination,
  getLevels,
} from '../core/services/courses';

const useCourseStore = create((set, get) => ({
  // State
  courses: [],
  loading: true,
  totalCourses: 1,
  currentPage: 1,
  categories: [],
  courseLevels: [],
  teachers: [],
  responsiveFilter: false,
  perPage: 12,
  categoryCount: 1,
  filters: {
    sorting: 'Active',
    sortingType: 'DESC',
    query: null,
    category: null,
    levelId: null,
    teacherId: null,
    costDown: 0,
    costUp: 2000000000,
    startDate: null,
    endDate: null,
  },

  // Actions
  setCourses: (courses) => set({ courses }),
  setLoading: (loading) => set({ loading }),
  setTotalCourses: (totalCourses) => set({ totalCourses }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setSorting: (sorting) => set({ sorting }),
  setSortingType: (sortingType) => set({ sortingType }),
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setLevelId: (levelId) => set({ levelId }),
  setTeacherId: (teacherId) => set({ teacherId }),
  setCostDown: (costDown) => set({ costDown }),
  setCostUp: (costUp) => set({ costUp }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setResponsiveFilter: (responsiveFilter) => set({ responsiveFilter }),

  // Async Actions
  fetchInitialData: async () => {
    const [categories, levels, teachers] = await Promise.all([
      getCategories(),
      getLevels(),
      getTeacherCountReports(),
    ]);
    set({
      categories,
      courseLevels: levels,
      teachers,
    });
  },

  fetchCourses: async () => {
    const {
      currentPage,
      sorting,
      sortingType,
      query,
      category,
      levelId,
      teacherId,
      costDown,
      costUp,
      startDate,
      endDate,
    } = get();

    const params = {
      RowsOfPage: 12,
      PageNumber: currentPage,
      SortingCol: sorting,
      SortType: sortingType,
      Query: query ? query : null,
      TechCount: category ? 1 : null,
      ListTech: category ? category : null,
      courseLevelId: levelId ? levelId : null,
      TeacherId: teacherId ? teacherId : null,
      CostDown: costDown,
      CostUp: costUp,
      StartDate: startDate ? startDate : null,
      EndDate: endDate ? endDate : null,
    };

    try {
      set({ loading: true });
      const { courseFilterDtos: result, totalCount: coursesCount } =
        await getCoursesWithPagination(params);
      set({ courses: result, totalCourses: coursesCount, loading: false });
    } catch (error) {
      console.error('Error fetching courses:', error);
      set({ loading: false });
    }
  },
}));

export default useCourseStore;

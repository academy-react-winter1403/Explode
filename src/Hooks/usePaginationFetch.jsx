import { useState, useEffect, useCallback, useRef } from 'react';

const usePaginationFetch = (fetchFunction, initialParams = {}) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
    query: initialParams.Query || '',
    pagination: {
      pageCount: 1,
      currentPage: initialParams.PageNumber || 1,
    },
    filters: {
      startDate: initialParams.StartDate || null,
      endDate: initialParams.EndDate || null,
    },
  });

  const debounceTimer = useRef(null);
  const isMounted = useRef(true);

  const fetchData = useCallback(async () => {
    if (!isMounted.current) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const result = await fetchFunction({
        PageNumber: state.pagination.currentPage,
        RowsOfPage: initialParams.RowsOfPage || 10,
        Query: state.query,
        StartDate: state.filters.startDate,
        EndDate: state.filters.endDate,
      });

      if (!isMounted.current) return;
      const dataArray =
        result.myFavoriteNews ||
        result.listOfMyCourses ||
        result.favoriteCourseDto ||
        result ||
        [];
      const totalPages = result.totalCount || result.totalPages || 1;

      setState((prev) => ({
        ...prev,
        data: dataArray,
        pagination: {
          ...prev.pagination,
          pageCount: totalPages,
        },
      }));
    } catch (error) {
      if (!isMounted.current) return;
      setState((prev) => ({
        ...prev,
        error: error.message || 'Failed to fetch data',
      }));
    } finally {
      if (isMounted.current) {
        setState((prev) => ({ ...prev, loading: false }));
      }
    }
  }, [
    fetchFunction,
    state.pagination.currentPage,
    state.query,
    state.filters,
    initialParams.RowsOfPage,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = useCallback((query) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        query,
        pagination: { ...prev.pagination, currentPage: 1 },
      }));
    }, 500);
  }, []);

  const handleDateChange = useCallback((type, value) => {
    setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [type]: value ? new Date(value).toISOString() : null,
      },
      pagination: { ...prev.pagination, currentPage: 1 },
    }));
  }, []);

  const setPage = useCallback((page) => {
    setState((prev) => ({
      ...prev,
      pagination: { ...prev.pagination, currentPage: page },
    }));
  }, []);

  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    query: state.query,
    filters: state.filters,
    pagination: state.pagination,
    handleSearch,
    handleStartDate: (value) => handleDateChange('startDate', value),
    handleEndDate: (value) => handleDateChange('endDate', value),
    setPage,
    refetch: fetchData,
  };
};

export default usePaginationFetch;

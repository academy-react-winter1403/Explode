import { useState, useEffect, useCallback } from 'react';

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

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const result = await fetchFunction({
        PageNumber: state.pagination.currentPage,
        RowsOfPage: initialParams.RowsOfPage || 10,
        Query: state.query,
        StartDate: state.filters.startDate,
        EndDate: state.filters.endDate,
      });

      // Handle different response structures
      const dataArray =
        result.listOfMyCourses || result.myFavoriteNews || result.data || [];
      const totalPages = result.totalPages || 1;

      setState((prev) => ({
        ...prev,
        data: dataArray,
        pagination: {
          ...prev.pagination,
          pageCount: totalPages,
        },
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message || 'Failed to fetch data',
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, [
    fetchFunction,
    state.pagination.currentPage,
    state.filters,
    state.query,
    initialParams.RowsOfPage,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (query) => {
    setState((prev) => ({
      ...prev,
      query,
      pagination: { ...prev.pagination, currentPage: 1 },
    }));
  };

  const handleDateChange = (type, value) => {
    setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [type]: value ? new Date(value).toISOString() : null,
      },
      pagination: { ...prev.pagination, currentPage: 1 },
    }));
  };

  const setPage = (page) => {
    setState((prev) => ({
      ...prev,
      pagination: { ...prev.pagination, currentPage: page },
    }));
  };

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

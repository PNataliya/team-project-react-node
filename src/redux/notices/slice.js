import { createSlice } from '@reduxjs/toolkit';
import {
  getAll,
  getNoticesById,
  addFavoriteNotices,
  favoriteNotices,
  removeFavoriteNotices,
  addNotices,
  getUserNotices,
  deleteNotices,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesInitialState = {
  items: [],
  userItems: [],
  myFavoriteItems: [],
  noticesById: [],
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: {
    [getAll.pending]: handlePending,
    [getUserNotices.pending]: handlePending,
    [getNoticesById.pending]: handlePending,

    [addNotices.pending]: handlePending,
    [addFavoriteNotices.pending]: handlePending,

    [favoriteNotices.pending]: handlePending,
    [removeFavoriteNotices.pending]: handlePending,

    [deleteNotices.pending]: handlePending,

    [getAll.rejected]: handleRejected,
    [getUserNotices.rejected]: handleRejected,
    [getNoticesById.rejected]: handleRejected,

    [addNotices.rejected]: handleRejected,
    [addFavoriteNotices.rejected]: handleRejected,

    [favoriteNotices.rejected]: handleRejected,
    [removeFavoriteNotices.rejected]: handleRejected,

    [deleteNotices.rejected]: handleRejected,

    [getAll.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [favoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.myFavoriteItems = action.payload;
    },
    [getUserNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.selectUserItems = action.payload;
    },
    [getNoticesById.fulfilled](state, action) {
      state.isLoading = false;
      state.noticesById = action.payload;
    },

    [addNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addFavoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const foo = state.items.find(
        item => item._id === action.payload.noticeId
      );
      state.myFavoriteItems = [foo, ...state.myFavoriteItems];
    },

    [deleteNotices.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [removeFavoriteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.myFavoriteItems = state.myFavoriteItems.filter(
        item => item._id !== action.payload.noticeId
      );
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
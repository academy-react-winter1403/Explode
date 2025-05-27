import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  editUserProfileInfo,
  getUserProfileInfo,
} from '../core/services/UserProfileInfo';

const initialState = {
  userProfile: null,
  isLoading: false,
  error: null,
};
export const getUserInfo = createAsyncThunk(
  'userProfile/getUserProfileInfo',
  async () => {
    const response = await getUserProfileInfo();
    return response;
  },
);
export const editUserInfo = createAsyncThunk(
  'userProfile/editUserProfileInfo',
  async (profileData) => {
    const response = await editUserProfileInfo(profileData);
    return response;
  },
);
export const addUserProfImage = createAsyncThunk(
  'userProfile/addUserImage',
  async (formData) => {
    const response = await editUserProfileInfo(formData);
    return response;
  },
);
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateUserProfile(state, action) {
      if (state.userProfile) {
        state.userProfile = {
          ...state.userProfile,
          ...action.payload,
        };
      }
    },

    updateProfilePicture(state, action) {
      if (state.userProfile) {
        state.userProfile.currentPictureAddress = action.payload;
      }
    },
    addUserImage(state, action) {
      if (state.userProfile) {
        state.userProfile.userImage = [
          ...state.userProfile.userImage,
          action.payload,
        ];
      }
    },
    removeUserImage(state, action) {
      if (state.userProfile) {
        state.userProfile.userImage = state.userProfile.userImage.filter(
          (image) => image.id !== action.payload,
        );
      }
    },
    resetUserProfile(state) {
      state.userProfile = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userProfile = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  fetchUserProfileStart,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  updateUserProfile,
  updateProfilePicture,
  addUserImage,
  removeUserImage,
  resetUserProfile,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as api from 'redux/user/apiUser'

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/user/get');

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (data, thunkAPI) => {
    try {
      const { data: result } = await axios.put('/user/update', data);

      return result;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addUserPet = createAsyncThunk(
  'user/addUserPet',
  async (data, thunkAPI) => {
    try {
	    const { data: result } = await axios.post('/pets/add', data);
	    return result;
    }
          catch ({message}) {
        return thunkAPI.rejectWithValue(message)
      }
  }
)


// export const addUserPet = createAsyncThunk(
//   'user/addUserPet',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await axios.addUserPet(data);
//       return result;
//     } catch ({ response }) {
//       const { status, data } = response;
//       const error = {
//         status,
//         message: data.message,
//       };
//       return rejectWithValue(error);
//     }
//   }
// );

// export const addUserPet = createAsyncThunk(
//   'user/addUserPet',
//   async (data, thunkAPI) => {
//     try {
// 	    const { data: result } = await axios.post('/pets/add', data);
// 	    return result;
//     }
//           catch ({message}) {
//         return thunkAPI.rejectWithValue(message)
//       }
//   }
// )

export const addUserPet = createAsyncThunk(
  'user/addUserPet',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.addUserPet(data);
      console.log('result', result);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const removeUserPet = createAsyncThunk(
  'user/removeUserPet',
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.removeUserPet(id);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

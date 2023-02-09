import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk(
	'user/getUserData',
	async (_, { rejectWithValue }) => {
		try {
			const result = await axios.getUserData();
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

export const updateUserData = createAsyncThunk(
	'user/updateUserData',
	async (data, { rejectWithValue }) => {
		try {
			const result = await axios.updateUserData(data);
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

export const addUserPet = createAsyncThunk(
	'user/addUserPet',
	async (data, { rejectWithValue }) => {
		try {
			const result = await axios.addUserPet(data);
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
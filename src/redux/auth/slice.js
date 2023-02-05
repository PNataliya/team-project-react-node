import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    user: {name: null, email: null},
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {
    
    },
});

export const authReducer = authSlice.reducer;
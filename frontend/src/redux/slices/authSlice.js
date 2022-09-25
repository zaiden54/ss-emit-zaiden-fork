import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    userId: null,
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuthenticated = action.payload?.token && true
            state.token = action.payload?.token || null
            state.userId = action.payload?.userId || null
        }
    }
})

export const authActions = authSlice.actions

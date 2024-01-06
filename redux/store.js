import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import jobReducer from './JobSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    // jobs: jobReducer,
    
  },
})

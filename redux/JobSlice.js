// // jobsSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchJobDetails = createAsyncThunk('jobs/fetchJobDetails', async () => {
//   try {
//     const response = await axios.get('http://localhost:8000/api/getJob');
//     return response.data.jobs; // Assuming the data is under a 'jobs' property
//   } catch (error) {
//     throw Error('Failed to fetch job details');
//   }
// });

// const jobSlice = createSlice({
//   name: 'jobs',
//   initialState: {
//     value: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJobDetails.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchJobDetails.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.value = action.payload;
//       })
//       .addCase(fetchJobDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default jobSlice.reducer;

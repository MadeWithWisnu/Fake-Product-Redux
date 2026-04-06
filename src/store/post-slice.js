import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ── Thunks ────────────────────────────────────────────────
const USE_DUMMY = true;

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
});

export const fetchPostById = createAsyncThunk('post/fetchPostById', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
});

// ── Slice ─────────────────────────────────────────────────
const postSlice = createSlice({
  name: 'post',
  initialState: {
    list: [],         // all products (used in PostGrid + cart detail lookup)
    detail: null,     // single product (PostPage)
    status: 'idle',
    detailStatus: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchPosts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => { state.status = 'failed'; })

      // fetchPostById
      .addCase(fetchPostById.pending, (state) => { state.detailStatus = 'loading'; })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.detail = action.payload;
      })
      .addCase(fetchPostById.rejected, (state) => { state.detailStatus = 'failed'; });
  },
});

export default postSlice.reducer;
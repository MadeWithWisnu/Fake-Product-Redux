import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const USE_DUMMY = true; // ← ganti false kalau mau pakai API

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const res = await fetch('https://fakestoreapi.com/users');
    return res.json();
});

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/users/${id}`);
    return res.json();
});


export const fetchCartsByUser = createAsyncThunk('user/fetchCartsByUser', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/carts/user/${id}`);
    return res.json();
});

// ── Slice ─────────────────────────────────────────────────
const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],           // all users
    detail: null,       // single user (for ContactDialog)
    carts: [],          // carts for selected user
    status: 'idle',     // 'idle' | 'loading' | 'succeeded' | 'failed'
    cartStatus: 'idle',
    detailStatus: 'idle',
  },
  reducers: {
    clearDetail(state) {
      state.detail = null;
    },
    clearCarts(state) {
      state.carts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchUsers
      .addCase(fetchUsers.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => { state.status = 'failed'; })

      // fetchUserById
      .addCase(fetchUserById.pending, (state) => { state.detailStatus = 'loading'; })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.detail = action.payload;
      })
      .addCase(fetchUserById.rejected, (state) => { state.detailStatus = 'failed'; })

      // fetchCartsByUser
      .addCase(fetchCartsByUser.pending, (state) => { state.cartStatus = 'loading'; })
      .addCase(fetchCartsByUser.fulfilled, (state, action) => {
        state.cartStatus = 'succeeded';
        state.carts = action.payload;
      })
      .addCase(fetchCartsByUser.rejected, (state) => { state.cartStatus = 'failed'; });
  },
});

export const { clearDetail, clearCarts } = userSlice.actions;
export default userSlice.reducer;
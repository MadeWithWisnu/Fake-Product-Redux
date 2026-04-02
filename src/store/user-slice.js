import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dummyUsers from '../data/dummyUsers';
import dummyCarts from '../data/dummyCharts';

const USE_DUMMY = true; // ← ganti false kalau mau pakai API

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const res = await fetch('https://fakestoreapiserver.reactbd.org/api/users');
    const data = await res.json();
    return data.data; // ← tambahkan .data
});

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id) => {
    // if (USE_DUMMY) {
    //     return dummyUsers.find((u) => u.id === Number(id)) ?? null;
    // }
    const res = await fetch(`https://fakestoreapiserver.reactbd.org/api/users/${id}`);
    return res.json();
});


export const fetchCartsByUser = createAsyncThunk('user/fetchCartsByUser', async (id) => {
    if (USE_DUMMY) {
        return dummyCarts.filter((c) => c.userId === Number(id)); // ← ganti c.id → c.userId
    }
    const res = await fetch(`https://fakestoreapiserver.reactbd.org/api/carts/${id}`);
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
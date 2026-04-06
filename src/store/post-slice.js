import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
});

export const fetchPostById = createAsyncThunk(
    'post/fetchPostById',
    async (id, { getState }) => {
        // Gunakan cache dari list jika sudah ada
        const existing = getState().post.list.find((p) => p.id === Number(id));
        if (existing) return existing;

        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        return res.json();
    }
);

const postSlice = createSlice({
    name: 'post',
    initialState: {
        list: [],
        detail: null,
        status: 'idle',
        detailStatus: 'idle',
    },
    reducers: {
        clearDetail(state) {
            state.detail = null;
            state.detailStatus = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending,   (state) => { state.status = 'loading'; })
            .addCase(fetchPosts.fulfilled, (state, action) => { state.status = 'succeeded'; state.list = action.payload; })
            .addCase(fetchPosts.rejected,  (state) => { state.status = 'failed'; })

            .addCase(fetchPostById.pending,   (state) => { state.detailStatus = 'loading'; })
            .addCase(fetchPostById.fulfilled, (state, action) => { state.detailStatus = 'succeeded'; state.detail = action.payload; })
            .addCase(fetchPostById.rejected,  (state) => { state.detailStatus = 'failed'; });
    },
});

export const { clearDetail } = postSlice.actions;
export default postSlice.reducer;
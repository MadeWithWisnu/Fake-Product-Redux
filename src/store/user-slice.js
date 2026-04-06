import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

async function fetchProductById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const res = await fetch('https://fakestoreapi.com/users');
    return res.json();
});

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/users/${id}`);
    return res.json();
});

export const fetchCartsByUser = createAsyncThunk('user/fetchCartsByUser', async (userId) => {
    const res = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
    const carts = await res.json();

    // 1. Kumpulkan semua productId unik dari semua cart
    const uniqueProductIds = [
        ...new Set(carts.flatMap((cart) => cart.products.map((item) => item.productId)))
    ];

    // 2. Fetch semua product unik secara paralel — masing-masing hanya 1x
    const productList = await Promise.all(
        uniqueProductIds.map((id) => fetchProductById(id))
    );

    // 3. Buat Map untuk lookup O(1)
    const productMap = new Map(productList.map((p) => [p.id, p]));

    // 4. Join tanpa fetch tambahan — tinggal lookup dari Map
    const enrichedCarts = carts.map((cart) => ({
        ...cart,
        products: cart.products.map((item) => ({
            ...item,
            productDetail: productMap.get(item.productId),
        })),
    }));

    return enrichedCarts;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        list: [],
        status: 'idle',

        detail: null,
        detailStatus: 'idle', // ← baru
        carts: [],
        cartStatus: 'idle',
    },
    reducers: {
        clearDetail(state) {           // ← baru
            state.detail = null;
            state.detailStatus = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending,    (state) => { state.status = 'loading'; })
            .addCase(fetchUsers.fulfilled,  (state, action) => { state.status = 'succeeded'; state.list = action.payload; })
            .addCase(fetchUsers.rejected,   (state) => { state.status = 'failed'; })

            .addCase(fetchUserById.pending,    (state) => { state.detailStatus = 'loading'; })       // ← baru
            .addCase(fetchUserById.fulfilled,  (state, action) => { state.detailStatus = 'succeeded'; state.detail = action.payload; }) // ← baru
            .addCase(fetchUserById.rejected,   (state) => { state.detailStatus = 'failed'; })        // ← baru

            .addCase(fetchCartsByUser.pending,    (state) => { state.cartStatus = 'loading'; })
            .addCase(fetchCartsByUser.fulfilled,  (state, action) => { state.cartStatus = 'succeeded'; state.carts = action.payload; })
            .addCase(fetchCartsByUser.rejected,   (state) => { state.cartStatus = 'failed'; });
    },
});

export const { clearDetail } = userSlice.actions; // ← baru
export default userSlice.reducer;
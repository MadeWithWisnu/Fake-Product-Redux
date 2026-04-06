export async function getUserByIdAPI(id) {
    const promise = await fetch(`https://fakestoreapi.com/users/${id}`);
    const response = await promise.json();
    return response;
}

export async function getCartsByUserAPI(userId) {
    const promise = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
    const carts = await promise.json();

    // join setiap product di setiap cart dengan detail produknya
    const cartsWithDetail = await Promise.all(
        carts.map(async (cart) => {
            const productsWithDetail = await Promise.all(
                cart.products.map(async (item) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
                    const productDetail = await res.json();
                    return { ...item, productDetail };
                })
            );
            return { ...cart, products: productsWithDetail };
        })
    );

    return cartsWithDetail;
}
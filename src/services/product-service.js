export async function getAllProductsAPI() {
    const promise = await fetch('https://fakestoreapi.com/products');
    const response = await promise.json();
    return response;
}

export async function getProductByIdAPI(id) {
    const promise = await fetch(`https://fakestoreapi.com/products/${id}`);
    const response = await promise.json();
    return response;
}
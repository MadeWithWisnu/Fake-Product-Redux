export async function getAllUsersAPI() {
    const promise = await fetch('https://fakestoreapi.com/users');
    const response = await promise.json();
    return response;
}

export async function getUserByIdAPI(id) {
    const promise = await fetch(`https://fakestoreapi.com/users/${id}`);
    const response = await promise.json();
    return response;
}

export async function getContactAPI(id) {
    const promise = await fetch(`https://fakestoreapi.com/users/${id}`);
    const { phone, email, address: { street, suite, city, zipcode, geolocation: {lat, long} } } = await promise.json();
    return { phone, email, street, suite, city, zipcode, lat, long };
}

export async function getNameAPI(id) {
    const promise = await fetch(`https://fakestoreapi.com/users/${id}`);
    const { name } = await promise.json();
    return { name };
}
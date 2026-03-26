import axios from "./axios.customize";

const getProvince = async () => {
    const URL_BACKEND = '/address/provinces';
    return await axios.get(URL_BACKEND);
}

const getDistrict = async (province_id) => {
    const URL_ADDRESS = `/address/districts/${province_id}`;
    return axios.get(URL_ADDRESS);
}

const getVillage = async (district_id) => {
    const URL_ADDRESS = `/address/villages/${district_id}`;
    return axios.get(URL_ADDRESS);
}

const getAllProducts = async () => {
    const URL_BACKEND = "/products";
    return axios.get(URL_BACKEND);
}

export const getProductsByBrand = (brand) => {
    return axios.get(`/products?brand=${brand}`);
};

const getProductById = async (id) => {
    const URL_BACKEND = `/products/${id}`;
    return axios.get(URL_BACKEND);
}

const createProduct = (nameProduct, priceProduct, imageUrls, sizes, brand) => {
    const URL_BACKEND = "/products";
    const data = {
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        imgSrc: imageUrls,
        sizes: sizes,
        brand: brand
    }
    return axios.post(URL_BACKEND, data);
}

const deleteProduct = async (idProduct) => {
    const URL_BACKEND = `/products/${idProduct}`;
    return axios.delete(URL_BACKEND);
}

const updateProduct = (nameProduct, priceProduct, imageUrls, idProduct, brand, sizes) => {
    const URL_BACKEND = `/products/${idProduct}`;
    const data = {
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        imgSrc: imageUrls,
        brand: brand,
        sizes: sizes
    }
    return axios.put(URL_BACKEND, data);
}

const loginUser = async (email, password) => {
    const URL_BACKEND = "/users/login";
    const data = {
        email: email,
        password: password
    }
    return axios.post(URL_BACKEND, data);
}

const getMyUser = async () => {
    const URL_BACKEND = "/users/account";
    return axios.get(URL_BACKEND);
}

const createUser = async (name, email, phone, password) => {
    const URL_BACKEND = "/users"
    const data = {
        name: name,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const getCart = () => {
    const URL_BACKEND = "/users/cart";
    return axios.get(URL_BACKEND);
}

const addToCart = (productId, quantity, size) => {
    const URL_BACKEND = "/users/cart";
    const data = {
        productId: productId,
        quantity: quantity,
        size: size
    }
    return axios.post(URL_BACKEND, data);
}

const deleteInCart = async (idCart) => {
    const URL_BACKEND = `/users/cart/${idCart}`;
    return axios.delete(URL_BACKEND);
}

const buyProduct = async (data) => {
    const URL_BACKEND = "/receipt";
    console.log(data);

    return axios.post(URL_BACKEND, data);
}

export { getProvince, getDistrict, getVillage, getAllProducts, getProductById, deleteProduct, createProduct, updateProduct, loginUser, getMyUser, createUser, getCart, addToCart, deleteInCart, buyProduct };

import axios from "./axios.customize";

const getProvince = async () => {
    const URL_ADDRESS = 'https://provinces.open-api.vn/api/p/';
    return await axios.get(URL_ADDRESS);
}

const getDistrict = async (province_id) => {
    const URL_ADDRESS = `https://provinces.open-api.vn/api/p/${province_id}?depth=2`;
    return axios.get(URL_ADDRESS);
}

const getVillage = async (district_id) => {
    const URL_ADDRESS = `https://provinces.open-api.vn/api/d/${district_id}?depth=2`;
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

export { getProvince, getDistrict, getVillage, getAllProducts, getProductById, deleteProduct, createProduct, updateProduct, loginUser, getMyUser, createUser };

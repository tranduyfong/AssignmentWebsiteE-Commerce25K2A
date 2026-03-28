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

const getMyReceipt = async () => {
    const URL_BACKEND = "/receipt/my";
    return axios.get(URL_BACKEND);
}

const getVnpayUrl = async (code, amount) => {
    const URL_BACKEND = "/vnpay";
    const data = {
        orderCode: code,
        amount: amount
    }

    return axios.post(URL_BACKEND, data);
}

const verifyVnpay = async (data) => {
    const URL_BACKEND = `/vnpay?${data}`;
    return axios.get(URL_BACKEND);
}

const mailBuyProduct = (payload) => {
    const URL_BACKEND = "/mail/send";

    const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

    const productRows = payload.products.map(item => `
        <tr>
            <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: left;">
                <p style="margin: 0; font-weight: bold; color: #333;">${item.nameProduct}</p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #666;">Size: ${item.size}</p>
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right; font-weight: bold;">${formatPrice(item.priceAtTime)}</td>
        </tr>
    `).join("");

    // Khung HTML chuẩn cho Email
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                
                <div style="background-color: #f59e0b; padding: 20px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">SOCCER BECK</h1>
                    <p style="color: #fff; margin: 5px 0 0 0; font-size: 14px;">Xác nhận đơn hàng thành công</p>
                </div>

                <div style="padding: 30px;">
                    <p style="font-size: 16px; color: #333;">Chào <strong>${payload.customerName}</strong>,</p>
                    <p style="font-size: 15px; color: #555; line-height: 1.5;">Cảm ơn bạn đã tin tưởng và đặt hàng tại Soccer Beck. Dưới đây là thông tin chi tiết đơn hàng <strong>#${payload.orderCode}</strong> của bạn:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
                        <thead>
                            <tr style="background-color: #f8f9fa;">
                                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Sản phẩm</th>
                                <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">SL</th>
                                <th style="padding: 12px; text-align: right; border-bottom: 2px solid #ddd;">Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${productRows}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2" style="padding: 12px; text-align: right; font-weight: bold; border-top: 2px solid #ddd;">Tổng cộng:</td>
                                <td style="padding: 12px; text-align: right; font-weight: bold; color: #e11d48; border-top: 2px solid #ddd; font-size: 16px;">
                                    ${formatPrice(payload.totalAmount)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <div style="margin-top: 30px; background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                        <h3 style="margin-top: 0; color: #333; font-size: 16px;">Thông tin nhận hàng:</h3>
                        <p style="margin: 5px 0; font-size: 14px; color: #555;"><strong>Người nhận:</strong> ${payload.customerName} (${payload.phone})</p>
                        <p style="margin: 5px 0; font-size: 14px; color: #555;"><strong>Địa chỉ:</strong> ${payload.address}</p>
                        <p style="margin: 5px 0; font-size: 14px; color: #555;"><strong>Thanh toán:</strong> ${payload.paymentMethod}</p>
                    </div>

                    <p style="margin-top: 30px; font-size: 14px; color: #777; text-align: center;">Chúng tôi sẽ sớm liên hệ để giao hàng cho bạn. Chúc bạn một ngày tốt lành!</p>
                </div>
            </div>
        </div>
    `;

    const data = {
        to: payload.email,
        subject: `[Soccer Beck] Xác nhận đơn hàng #${payload.orderCode}`,
        content: htmlContent
    };

    return axios.post(URL_BACKEND, data);
}

const getChatHistory = async (roomId) => {
    try {
        const res = await axios.get(`/chat/history/${roomId}`);
        return res.data;
    } catch (error) {
        console.error("Lỗi khi lấy lịch sử chat:", error);
        return { success: false, data: [] };
    }
};

const getChatRooms = async () => {
    try {
        const res = await axios.get(`/chat/rooms`);
        return res.data;
    } catch (error) {
        return { success: false, data: [] };
    }
};

export { getProvince, getDistrict, getVillage, getAllProducts, getProductById, deleteProduct, createProduct, updateProduct, loginUser, getMyUser, createUser, getCart, addToCart, deleteInCart, buyProduct, getMyReceipt, getVnpayUrl, verifyVnpay, mailBuyProduct, getChatHistory, getChatRooms };

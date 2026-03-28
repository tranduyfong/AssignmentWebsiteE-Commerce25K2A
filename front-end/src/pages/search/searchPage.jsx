import { useLocation } from "react-router-dom";
import { getAllProducts } from "../../services/api.service";
import { useEffect, useState } from "react";

const SearchPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword") || "";

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProduct = async () => {
            const res = await getAllProducts();
            if (res && res.data) {
                setProducts(res.data);
            }
        };
        loadProduct();
    }, []);

    // format tiền
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + "đ";
    };

    //LOGIC SEARCH
    const filteredProducts = products.filter((p) => {
        if (!keyword) return true;

        return p.nameProduct
            ?.toLowerCase()
            .includes(keyword.toLowerCase().trim());
    });

    return (
        <div className="p-12 bg-white min-h-screen mt-30">
            <h1 className="text-2xl font-bold uppercase text-center mb-10">
                Kết quả tìm kiếm: {keyword}
            </h1>

            <div className="grid grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <div
                            key={item._id}
                            className="group bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden border border-gray-100"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={item.imgSrc?.[0]}
                                    alt={item.nameProduct}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-4 text-center">
                                <div className="font-semibold text-gray-800">
                                    Mã sản phẩm: {item._id}
                                </div>

                                <p className="text-red-500 font-bold mt-2">
                                    {formatPrice(item.priceProduct)}
                                </p>

                                <div className="font-semibold text-gray-800 uppercase">
                                    Hàng có sẵn
                                </div>

                                <h2 className="text-gray-950 line-clamp-2">
                                    {item.nameProduct}
                                </h2>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-4 text-center text-gray-500 text-lg">
                        Không tìm thấy sản phẩm
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
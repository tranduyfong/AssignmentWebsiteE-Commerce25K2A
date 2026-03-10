import { useLocation } from "react-router-dom";


const SearchPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword") || "";

    const product = [
    {
            id: '1',
            nameProduct: 'Giày thể thao Ar xanh dương',
            imgs: 'https://bizweb.dktcdn.net/thumb/large/100/108/842/products/26013107.jpg?v=1770101958230',
            price: 8500000,
        },
        {
            id: '2',
            nameProduct: 'Giày Adidas sọc đen gót hồng',
            imgs: 'https://bizweb.dktcdn.net/thumb/large/100/108/842/products/1-7570b343-1230-47eb-a6c5-c2cba3a82ebe.jpg?v=1754987431497',
            price: 2500000,
        },
        {
            id: '3',
            nameProduct: 'Giày Adidas trắng sọc xám',
            imgs: 'https://bizweb.dktcdn.net/thumb/large/100/108/842/products/23040105.jpg?v=1754987717003',
            price: 2400000
        },
        {
            id: '4',
            nameProduct: 'Giày Adidas sọc đen gót hồng',
            imgs: 'https://bizweb.dktcdn.net/thumb/large/100/108/842/products/1-7570b343-1230-47eb-a6c5-c2cba3a82ebe.jpg?v=1754987431497',
            price: 2500000,
        },
        {
            id: '5',
            nameProduct: 'Giày Adidas sọc đen gót hồng',
            imgs: 'https://bizweb.dktcdn.net/thumb/large/100/108/842/products/1-7570b343-1230-47eb-a6c5-c2cba3a82ebe.jpg?v=1754987431497',
            price: 2500000,
        },
    ];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const filteredProducts = product.filter((p) =>
        p.nameProduct.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <div className="p-12 bg-white min-h-screen mt-20">
            <h1 className="text-2xl font-bold uppercase text-center mb-10">
                Kết quả tìm kiếm: {keyword}
            </h1>
            <div className="grid grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <div key={item.id}
                        className="group bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden border border-gray-100">
                            <div className="relative overflow-hidden h-64">
                                <img src={item.imgs}
                                alt={item.nameProduct}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                            </div>

                            <div className="p-4 text-center">
                                <div className="font-semibold text-gray-800">
                                    Mã sản phẩm: 000{item.id}
                                </div>
                                <p className="text-red-500 font-bold mt-2">{formatPrice(item.price)}</p>
                                <div className="font-semibold text-gray-800 uppercase">
                                    Hàng có sẵn
                                </div>
                                 <h2 className="text-gray-950 truncate">{item.nameProduct}</h2>
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
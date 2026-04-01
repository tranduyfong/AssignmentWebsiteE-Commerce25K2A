const loadProduct = async () => {
    try {
        const res = await getAllProducts();
        console.log("Dữ liệu thực tế nhận được:", res);

        if (res) {

            if (Array.isArray(res)) {
                setProducts(res);
                setFilterProducts(res);
            }

            else if (res.data && Array.isArray(res.data)) {
                setProducts(res.data);
                setFilterProducts(res.data);
            }
        }
    } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
    }
};
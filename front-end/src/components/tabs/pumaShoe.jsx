import { Col, Row } from "antd";
import { useState } from "react";
import { getProductsByBrand } from "../../services/api.service";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const PumaShoe = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const loadProduct = async () => {
      const res = await getProductsByBrand("puma");
      setProduct(res.data)
    };
    loadProduct();
  }, [])
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  console.log(product);

  return (
    <>
      <div className="all-product nike-shoe">
        <Row className="mb-10" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {product?.map(items => (
            <Col className="gutter-row mb-5" span={4} key={items._id}>
              <Link to={`/detail/${items._id}`}>
                <div className="box">
                  <div class="img-wrapper">
                    <img src={items.imgSrc[0]} alt={items.nameProduct} />
                  </div>
                  <div className="flex flex-col items-center text-center grow bg-white">
                    <p className="font-semibold text-black " style={{ fontSize: "17px" }}>
                      Mã SP: {items._id.slice(-8).toUpperCase()}
                    </p>
                    <p className="font-bold text-red-600">
                      {formatPrice(items.priceProduct)}
                    </p>
                    <p className="font-bold text-black mb-2 uppercase" style={{ fontSize: "17px" }}>
                      {items.sizes?.some(s => s.quantity > 0) ? (
                        <p className="font-bold mb-2 uppercase" style={{ fontSize: "17px" }}>
                          Hàng có sẵn
                        </p>
                      ) : (
                        <p className="font-bold text-gray-500 mb-2 uppercase" style={{ fontSize: "17px" }}>
                          Hết hàng
                        </p>
                      )}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-2" style={{ fontSize: "15px" }}>
                      {items.sizes && items.sizes.length > 0 ? (
                        items.sizes.map((s, index) => (
                          <span
                            key={s._id || index}
                            className={`font-bold ${s.quantity > 0
                              ? "text-black" // Còn hàng: Màu đen
                              : "text-gray-300 line-through cursor-not-allowed" // Hết hàng: Màu xám nhạt và gạch ngang
                              }`}
                          >
                            {s.size}
                          </span>
                        ))
                      ) : (
                        // Fallback: Nếu dữ liệu lỗi hoặc chưa có mảng sizes, hiển thị mặc định
                        <span className="font-bold text-black">38 39 40 41 42 43 44</span>
                      )}
                    </div>
                    <p className="text-sm text-black font-light line-clamp-2 mt-auto hover:font-semibold" style={{ fontSize: "15px" }}>
                      {items.nameProduct}
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default PumaShoe;
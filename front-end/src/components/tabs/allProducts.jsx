import { Col, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/api.service";
import { formatPrice } from "../../../utils/format.price";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const res = await getAllProducts();
        setProducts(res.data);
      } catch (error) {
        console.error("Lỗi khi load sản phẩm", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, []);

  return (
    <>
      <div className="all-product">
        <Row className="mb-10" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {/* HIỆU ỨNG CHỜ: Hiển thị 6 khung Skeleton nếu đang loading */}
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <Col className="gutter-row mb-5" span={4} key={idx}>
                <div className="box p-3 border rounded-lg bg-white h-full">
                  <Skeleton.Image active className="w-full! h-40! mb-4" />
                  <Skeleton active paragraph={{ rows: 3 }} title={false} />
                </div>
              </Col>
            ))
          ) : (
            products?.slice(0, 24).map(items => (
              <Col className="gutter-row mb-5" span={4} key={items._id}>
                <Link to={`/detail/${items._id}`}>
                  <div className="box h-full flex flex-col">
                    <div className="img-wrapper w-full aspect-square bg-gray-100 relative overflow-hidden">
                      <img
                        src={items.imgSrc[0]}
                        alt={items.nameProduct}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col items-center text-center grow bg-white p-2">
                      <p className="font-semibold text-black" style={{ fontSize: "17px" }}>
                        Mã SP: {items._id.slice(-8).toUpperCase()}
                      </p>
                      <p className="font-bold text-red-600">
                        {formatPrice(items.priceProduct)}
                      </p>

                      <div className="font-bold mb-2 uppercase" style={{ fontSize: "17px" }}>
                        {items.sizes?.some(s => s.quantity > 0) ? (
                          <span className="text-black">Hàng có sẵn</span>
                        ) : (
                          <span className="text-gray-500">Hết hàng</span>
                        )}
                      </div>

                      <div className="flex flex-wrap justify-center gap-2 mb-2" style={{ fontSize: "15px" }}>
                        {items.sizes && items.sizes.length > 0 ? (
                          items.sizes.map((s, index) => (
                            <span
                              key={s._id || index}
                              className={`font-bold ${s.quantity > 0
                                ? "text-black"
                                : "text-gray-300 line-through cursor-not-allowed"
                                }`}
                            >
                              {s.size}
                            </span>
                          ))
                        ) : (
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
            ))
          )}
        </Row>
      </div>
      <div className="text-center mt-4" data-aos="fade-up" data-aos-duration="250">
        <Link to={"/products"} className="view-all-products inline-block px-6 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition">
          Xem tất cả sản phẩm
        </Link>
      </div>
    </>
  )
}
export default AllProducts;
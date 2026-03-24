import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/api.service";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProduct = async () => {
      const res = await getAllProducts();
      setProducts(res.data)
    }
    loadProduct();
  }, []);
  return (
    <>
      <div className="all-product">
        <Row className="mb-10" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {products?.map(items => (
            <Col className="gutter-row mb-5" span={4} key={items._id}>
              <Link to={`/detail/${items._id}`}>
                <div className="box">
                  <div class="img-wrapper">
                    <img src={items.imgSrc[0]} alt={items.nameProduct} />
                  </div>
                  <div className="inner-content">
                    <p className="inner-title">{items.nameProduct}</p>
                    <p className="inner-price">Giá: {items.priceProduct}</p>
                    <button className="btn-buy">
                      Mua
                    </button>
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
export default AllProducts;
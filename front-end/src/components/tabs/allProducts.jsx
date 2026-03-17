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
            <Col className="gutter-row" span={4} key={items._id}>
              <div className="box">
                <img src={items.imgSrc[0]} alt={items.nameProduct} />
                <div className="inner-content">
                  <p className="inner-title">{items.nameProduct}</p>
                  <p className="inner-price">Giá: {items.priceProduct}</p>
                  <button className="btn-buy">
                    <Link to={`/detail/${items._id}`}>
                      Mua
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
export default AllProducts;
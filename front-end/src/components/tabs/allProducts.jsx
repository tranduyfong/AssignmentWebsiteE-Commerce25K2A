import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import products from "../../data/products";
const AllProducts = () => {
  
  return (
    <>
      <div className="all-product">
        <Row className="mb-10" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {products.map(items => (
            <Col className="gutter-row" span={4} key={items.id}>
              <div className="box">
                <img src={items.img} alt={items.title} />
                <div className="inner-content">
                  <p className="inner-title">{items.title}</p>
                  <p className="inner-price">Giá: {items.price}</p>
                  <button className="btn-buy">
                    <Link to = {`/products/${items.id}`}>
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
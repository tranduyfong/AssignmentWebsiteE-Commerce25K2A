import { Col, Row } from "antd";
import { useState } from "react";
import { getProductsByBrand } from "../../services/api.service";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const AdidasShoe = () => {
  const [product, setProduct] = useState([]);
  useEffect( () => {
    const loadProduct = async () => {
      const res = await getProductsByBrand("adidas");
      setProduct(res.data)
    };
    loadProduct();
  },[])
  console.log(product);
  
  return(
    <>
      <div className="all-product nike-shoe">
        <Row className="mb-10" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {product.map(items => (
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

export default AdidasShoe;
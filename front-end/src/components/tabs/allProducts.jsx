import { Col, Row } from "antd";
import { useNavigate } from "react-router";
const AllProducts = () => {
  const products = [
    {
      id: 1,
      title: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
      price: "1.300.000",
      img: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/25101103-3.jpg?v=1761715986937"
    },
    {
      id: 2,
      title: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
      price: "1.300.000",
      img: "https://bizweb.dktcdn.net/thumb/large/100/108/842/products/beck-78.jpg?v=1753152089380"
    },
    {
      id: 3,
      title: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
      price: "1.300.000",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/108/842/products/25122104.jpg?v=1766378262600"
    },
    {
      id: 4,
      title: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
      price: "1.300.000",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/108/842/products/25122104.jpg?v=1766378262600"
    },
    {
      id: 5,
      title: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
      price: "1.300.000",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/108/842/products/25122104.jpg?v=1766378262600"
    },
    {
      id: 6,
      title: "Giày Bóng Đá Nike Mercurial Vapor 16 Pro Vàng Chanh Cổ Lửng HQ TF",
      price: "1.300.000",
      img: "https://bizweb.dktcdn.net/thumb/grande/100/108/842/products/25122104.jpg?v=1766378262600"
    }
  ];

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
                    Mua
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
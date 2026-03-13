import { useParams } from "react-router-dom";

const ViewDetailProducts = () => {

  const { id } = useParams();

  return (
    <>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID sản phẩm: {id}</p>
    </>
  );
};

export default ViewDetailProducts;
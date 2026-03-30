import { Modal, notification } from 'antd';
import { deleteInCart } from '../../services/api.service';

const DeleteCart = (props) => {
    const { modalDelete, setModalDelete, dataLink, loadData } = props;

    const handleOk = async () => {
        try {
            let res = await deleteInCart(dataLink._id);

            if (res.data) {
                notification.success({
                    message: "Xóa sản phẩm khỏi giỏ hàng",
                    description: "Xóa sản phẩm thành công !"
                });

                await loadData();
                setModalDelete(false);
            } else {
                notification.error({
                    message: "Xóa sản phẩm",
                    description: "Có lỗi xảy ra khi xóa sản phẩm !"
                });
            }
        } catch (err) {
            console.log("Error", err);
        }
    };

    const handleCancel = () => {
        setModalDelete(false);
    };
    return (
        <>
            <Modal
                title="Xóa khỏi giỏ hàng"
                onOk={handleOk}
                open={modalDelete}
                onCancel={handleCancel}
            >
                <p>Bạn có muốn xóa sản phẩm này khỏi giỏ hàng chứ ?</p>
            </Modal>
        </>
    );
};
export default DeleteCart;
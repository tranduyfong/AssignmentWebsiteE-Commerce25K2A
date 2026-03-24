import { Modal, notification } from 'antd';
import { deleteProduct } from '../../services/api.service';
import { deleteManyImage } from '../../services/firebase.services';

const DeleteProduct = (props) => {
    const { modalDelete, setModalDelete, dataLink, loadProduct } = props;

    const handleOk = async () => {
        try {
            let res = await deleteProduct(dataLink._id);

            if (res.data) {
                if (dataLink.imgSrc?.length) {
                    deleteManyImage(dataLink.imgSrc)
                        .catch(err => console.log("Delete image error:", err));
                }

                notification.success({
                    message: "Xóa sản phẩm",
                    description: "Xóa sản phẩm thành công !"
                });

                await loadProduct();
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
                title="Title"
                onOk={handleOk}
                open={modalDelete}
                onCancel={handleCancel}
            >
                <p>Bạn có muốn xóa sản phẩm này chứ ?</p>
            </Modal>
        </>
    );
};
export default DeleteProduct;
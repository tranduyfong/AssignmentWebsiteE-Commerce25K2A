import { Button, Input, notification, Modal, Upload, Form, Radio } from "antd";
import { useState } from "react";
import { createProduct } from "../../services/api.service";
import ImgCrop from 'antd-img-crop';
import { uploadImage } from "../../services/firebase.services";
import LookingForCreateProduct from "./product.create.lookingfor";

const ProductCreate = (props) => {
    const { values, setValues, loadProduct } = props;

    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [brand, setBrand] = useState("");
    const [sizes, setSizes] = useState([
        { size: "", quantity: "" }
    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleAddSize = () => {
        setSizes([...sizes, { size: "", quantity: "" }]);
    };

    const handleChangeSize = (index, field, value) => {
        const newSizes = [...sizes];
        newSizes[index][field] = value;
        console.log(newSizes)
        setSizes(newSizes);
    };

    const handleRemoveSize = (index) => {
        const newSizes = sizes.filter((_, i) => i !== index);
        setSizes(newSizes);
    };


    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    // Submit after press OK
    const handleSubmitButton = async () => {
        try {
            setConfirmLoading(true);

            if (!nameProduct.trim()) {
                notification.error({
                    description: "Vui lòng nhập tên sản phẩm!"
                });
                return;
            }
            if (!priceProduct || isNaN(priceProduct)) {
                notification.error({
                    description: "Giá sản phẩm không hợp lệ!"
                });
                return;
            }
            if (fileList.length === 0) {
                notification.error({
                    description: "Vui lòng upload ít nhất 1 ảnh!"
                });
                return;
            }

            const sizeList = sizes.map(s => s.size.trim().toLowerCase());
            const quantityList = sizes.map(q => q.quantity.trim().toLowerCase());

            if (new Set(sizeList).size !== sizeList.length) {
                notification.error({
                    description: "Trùng size! Vui lòng kiểm tra lại...",
                });
                return;
            }

            if (sizeList.some(s => !s) || quantityList.some(q => !q)) {
                notification.error({
                    description: "Không được bỏ trống dữ liệu...",
                });
                return;
            }

            if (!brand) {
                notification.error({
                    description: "Vui lòng chọn brand!"
                });
                return;
            }

            const uploadedUrls = await Promise.all(
                fileList.map(file => uploadImage(file.originFileObj))
            );

            const res = await createProduct(nameProduct, priceProduct, uploadedUrls, sizes, brand);
            console.log(res);

            notification.success({
                message: "Thêm mới sản phẩm thành công!"
            });

            resetAndCloseModal();
            await loadProduct();

        } catch (err) {
            notification.error({
                message: "Lỗi thêm mới sản phẩm!",
                description: err.message
            });
        } finally {
            setConfirmLoading(false)
        }
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setNameProduct("");
        setPriceProduct("");
        setBrand("")
        setSizes([{ size: "", quantity: "" }])
        setFileList([]);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }} className="mb-5">
                <LookingForCreateProduct values={values} setValues={setValues} />
                <Button type="primary" onClick={() => setIsModalOpen(true)} className="w-35">Thêm sản phẩm mới</Button>
            </div>
            <Modal
                title="Thêm sản phẩm mới"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => handleSubmitButton()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                confirmLoading={confirmLoading}
                okText={"Thêm"}
                cancelText="Hủy bỏ"
            >
                <Form className="user-form" style={{ margin: "20px 0" }}>
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <div>
                            <span>Tên sản phẩm</span>
                            <Input value={nameProduct} onChange={(event) => setNameProduct(event.target.value)} placeholder="Nhập tên sản phẩm..." />
                        </div>
                        <div>
                            <span>Giá</span>
                            <Input value={priceProduct} onChange={(event) => { setPriceProduct(event.target.value) }} placeholder="Nhập giá sản phẩm..." />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span>Kích cỡ & Số lượng</span>
                                <Button type="primary" className="h-6!" onClick={handleAddSize}>
                                    Thêm size
                                </Button>
                            </div>

                            {sizes.map((item, index) => (
                                <div key={index} className="size flex gap-2 mb-2">
                                    <Input
                                        style={{ width: '30%' }}
                                        placeholder="Nhập size"
                                        value={item.size}
                                        onChange={(e) =>
                                            handleChangeSize(index, "size", e.target.value)
                                        }
                                    />

                                    <Input
                                        style={{ width: '50%' }}
                                        placeholder="Nhập số lượng"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleChangeSize(index, "quantity", e.target.value)
                                        }
                                    />

                                    {sizes.length > 1 && (
                                        <Button danger onClick={() => handleRemoveSize(index)}>
                                            Xóa
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-10">
                            <span>Thương hiệu</span>
                            <Radio.Group
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                optionType="button"
                                buttonStyle="solid"
                            >
                                <Radio.Button value="nike">Nike</Radio.Button>
                                <Radio.Button value="adidas">Adidas</Radio.Button>
                                <Radio.Button value="puma">Puma</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div>
                            <span>Upload ảnh</span>
                            <ImgCrop rotationSlider>
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileList.length < 5 && '+ Tải ảnh'}
                                </Upload>
                            </ImgCrop>
                        </div>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

export default ProductCreate;
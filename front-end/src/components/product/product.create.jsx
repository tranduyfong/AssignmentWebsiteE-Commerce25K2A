import { Button, Input, notification, Modal, Upload, Form } from "antd";
import { useState } from "react";
import { createProduct } from "../../services/api.service";
import ImgCrop from 'antd-img-crop';
import { uploadImage } from "../../services/firebase.services";

const ProductCreate = (props) => {
    const { loadProduct } = props;

    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [confirmLoading, setConfirmLoading] = useState(false);
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
        console.log([nameProduct, priceProduct, sizes])
        try {
            setConfirmLoading(true);

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

            const uploadedUrls = await Promise.all(
                fileList.map(file => uploadImage(file.originFileObj))
            );

            const res = await createProduct(nameProduct, priceProduct, uploadedUrls, sizes);
            console.log(res);

            notification.success({
                message: "Create success"
            });

            resetAndCloseModal();
            await loadProduct();

        } catch (err) {
            notification.error({
                message: "Upload failed",
                description: err
            });
        } finally {
            setConfirmLoading(false)
        }
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setNameProduct("");
        setPriceProduct("");
        setSizes([{ size: "", quantity: "" }])
        setFileList([]);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }} className="mt-40">
                <h3 className="font-bold text-2xl">Table Product</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>Create Product</Button>
            </div>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => handleSubmitButton()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                confirmLoading={confirmLoading}
                okText={"CREATE"}
            >
                <Form className="user-form" style={{ margin: "20px 0" }}>
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <div>
                            <span>Name</span>
                            <Input value={nameProduct} onChange={(event) => setNameProduct(event.target.value)} />
                        </div>
                        <div>
                            <span>Price</span>
                            <Input value={priceProduct} onChange={(event) => { setPriceProduct(event.target.value) }} />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span>Size & Quantity</span>
                                <Button type="primary" className="h-6!" onClick={handleAddSize}>
                                    Thêm size
                                </Button>
                            </div>

                            {sizes.map((item, index) => (
                                <div key={index} className="size flex gap-2 mb-2">
                                    <Input
                                        style={{ width: '30%' }}
                                        placeholder="Type size"
                                        value={item.size}
                                        onChange={(e) =>
                                            handleChangeSize(index, "size", e.target.value)
                                        }
                                    />

                                    <Input
                                        style={{ width: '50%' }}
                                        placeholder="Type quantity"
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

                        <div>
                            <span>Them anh</span>
                            <ImgCrop rotationSlider>
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileList.length < 5 && '+ Upload'}
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
import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, notification, Radio, Upload } from 'antd';
import { uploadImage } from '../../services/firebase.services';
import ImgCrop from 'antd-img-crop';
import { updateProduct } from '../../services/api.service';
const UpdateProduct = (props) => {
    const { modalUpdate, setModalUpdate, loadProduct, dataLink, setDataLink } = props;

    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [fileList, setFileList] = useState([]);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [brand, setBrand] = useState("");
    const [sizes, setSizes] = useState([
        { size: "", quantity: "" }
    ]);

    useEffect(() => {
        if (dataLink) {
            setNameProduct(dataLink.nameProduct);
            setPriceProduct(dataLink.priceProduct);
            setBrand(dataLink.brand);
            setSizes(dataLink.sizes)
            setFileList(
                dataLink.imgSrc?.map((url, index) => ({
                    uid: `-${index}`,
                    name: `image-${index}.png`,
                    status: "done",
                    url
                })) || []
            );
        }
    }, [dataLink])

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
        console.log(newSizes);
        setSizes(newSizes);
    };

    const resetAndCloseModal = () => {
        setModalUpdate(false);
        setNameProduct("");
        setPriceProduct("");
        setDataLink(null);
        setFileList([])
    }

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

    const handleOk = async () => {
        try {
            setConfirmLoading(true);
            const uploadedUrls = await Promise.all(
                fileList.map(async file => {
                    if (file.originFileObj) {
                        return await uploadImage(file.originFileObj);
                    }
                    return file.url;
                })
            );

            const res = await updateProduct(nameProduct, priceProduct, uploadedUrls, dataLink?._id, brand, sizes);
            console.log(res);

            notification.success({
                message: "Update success"
            });

            resetAndCloseModal();
            await loadProduct();

        } catch (err) {
            notification.error({
                message: "Update failed",
                description: err
            });
        } finally {
            setConfirmLoading(false)
        }
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setModalUpdate(false);
    };
    return (
        <>
            <Modal
                title="UPDATE"
                open={modalUpdate}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className="user-form" style={{ margin: "20px 0" }}>
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
                        <div className="flex gap-10">
                            <span>Brand</span>
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
                </div>
            </Modal>
        </>
    );
};
export default UpdateProduct;
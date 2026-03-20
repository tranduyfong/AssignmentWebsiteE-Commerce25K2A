import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, notification, Upload } from 'antd';
import { uploadImage } from '../../services/firebase.services';
import ImgCrop from 'antd-img-crop';
import { updateProduct } from '../../services/api.service';
const UpdateProduct = (props) => {
    const { modalUpdate, setModalUpdate, loadProduct, dataLink, setDataLink } = props;

    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [fileList, setFileList] = useState([]);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        if (dataLink) {
            setNameProduct(dataLink.nameProduct);
            setPriceProduct(dataLink.priceProduct);
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

            const res = await updateProduct(nameProduct, priceProduct, uploadedUrls, dataLink?._id);
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
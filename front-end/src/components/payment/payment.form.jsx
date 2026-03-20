import { Form, Input, Select } from 'antd';
import { getDistrict, getVillage } from '../../services/api.service';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
const onFinish = values => {
    console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
const PaymentForm = (props) => {
    const { provinces } = props;
    const [districts, setDistricts] = useState([]);
    const [village, setVillages] = useState([]);

    const handleProvinceChange = async (value) => {
        const res = await getDistrict(value);
        if (res) {
            setDistricts(res.districts);
            setVillages([]);
        }
    };

    const handleDistrictChange = async (value) => {
        const res = await getVillage(value);
        if (res) {
            setVillages(res.wards);
        }
    };

    return (
        <div className="p-2 w-full">
            <div>
                <p className="font-bold">Thông tin nhận hàng</p>
                <Form
                    size='large'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                    >
                        <Input placeholder='Nhập email...' />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                    >
                        <Input placeholder='Nhập họ và tên...' />
                    </Form.Item>

                    <Form.Item
                        name="numberphone"
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                    >
                        <Input placeholder='Nhập số điện thoại, ví dụ : +84123123123...' />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                    >
                        <Input placeholder='Nhập địa chỉ chi tiết...' />
                    </Form.Item>
                    <Form.Item
                        name="province"
                        rules={[{ required: true, message: 'Vui lòng chọn tỉnh!' }]}
                    >
                        <Select
                            placeholder="Chọn tỉnh thành"
                            onChange={handleProvinceChange}
                            showSearch
                        >
                            {provinces.map(item => (
                                <Option key={item.code} value={item.code}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="district"
                        rules={[{ required: true, message: 'Vui lòng chọn quận!' }]}
                    >
                        <Select
                            placeholder="Chọn quận huyện"
                            onChange={handleDistrictChange}
                            showSearch
                        >
                            {districts.map(item => (
                                <Option key={item.code} value={item.code}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="ward"
                        rules={[{ required: true, message: 'Vui lòng chọn phường!' }]}
                    >
                        <Select
                            placeholder="Chọn phường xã"
                            showSearch
                        >
                            {village.map(item => (
                                <Option key={item.code} value={item.code}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="more"
                    >
                        <TextArea
                            placeholder="Ghi chú (Tùy chọn)"
                            showSearch
                        >
                        </TextArea>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default PaymentForm;
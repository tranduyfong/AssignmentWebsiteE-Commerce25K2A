import { Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const PaymentForm = (props) => {
    const { form, provinces, districts, village, handleProvinceChange, handleDistrictChange, onFinish } = props;

    return (
        <div className="p-2 w-full">
            <div>
                <p className="font-bold">Thông tin nhận hàng</p>
                <Form
                    form={form}
                    size='large'
                    onFinish={onFinish}
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
                            labelInValue
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
                            labelInValue
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
                            labelInValue
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
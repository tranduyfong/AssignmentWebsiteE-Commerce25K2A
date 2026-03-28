import { Link } from "react-router-dom";
import InvoiceList from "./invoiceList";
import { Divider } from "antd";
const CheckCart = () => {
    return (
        <>
            <div className='mt-40 w-2/3 m-auto text-gray-500'>
                <div className='flex'>
                    <Link to="/">Trang chủ | </Link>
                    <Link className='ml-1 text-amber-400 font-semibold'>Kiểm tra đơn hàng</Link>
                </div>
                <Divider className='mt-3!' />
                <InvoiceList></InvoiceList>
            </div>
        </>
    );
}
export default CheckCart;
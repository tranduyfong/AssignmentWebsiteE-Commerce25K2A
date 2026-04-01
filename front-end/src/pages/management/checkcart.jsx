import { Link } from "react-router-dom";
import InvoiceList from "./invoiceList";
import { Divider } from "antd";
const CheckCart = () => {
    return (
        <>
            <div className='mt-30 m-auto text-gray-500'>
                <InvoiceList></InvoiceList>
            </div>
        </>
    );
}
export default CheckCart;
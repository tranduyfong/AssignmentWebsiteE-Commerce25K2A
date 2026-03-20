import InvoiceList from "./invoiceList";
const CheckCart = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen text-center">
                {/* <h1 className="text-red-500 text-3xl w-full font-bold">Check Cart Page</h1> */}
                <InvoiceList></InvoiceList>
            </div>
        </>
    );
}
export default CheckCart;
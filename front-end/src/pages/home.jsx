import { Carousel, Tabs } from "antd";
import "./css/home.css";
const HomePage = () => {
    const items = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];
    return (
        <>
            <div className="content-home">
                {/* section-1 */}
                <div>
                    <Carousel arrows infinite={false} autoplay className="banner">
                        <div className="slider-item">
                            <img src="https://bizweb.dktcdn.net/100/108/842/themes/775959/assets/slide-img3.jpg?1770012943148" alt="banner" />
                        </div>
                        <div className="slider-item">
                            <img src="https://bizweb.dktcdn.net/100/108/842/collections/bata.jpg?v=1606474705697" alt="banner" />
                        </div>
                        <div className="slider-item">
                            <img src="https://bizweb.dktcdn.net/100/108/842/collections/3soc.jpg?v=1606474668930" alt="banner" />
                        </div>
                    </Carousel>
                </div>

                {/* end-section-1 */}

                {/* section-2 */}

                <div className="section-2">
                    <div className="box">
                        <div className="inner-box">
                            <div className="icon">
                                <i class="fa-regular fa-calendar-check"></i>
                            </div>
                            <div className="content">
                                <p className="inner-title">
                                    Không sợ hết hàng
                                </p>
                                <span className="inner-desc">
                                    Do chẳng cần đợi nhân viên chốt đơn
                                </span>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="icon">

                                <i class="fa-solid fa-truck-fast"></i>
                            </div>
                            <div className="content">
                                <p className="inner-title">
                                    Giao hàng toàn quốc
                                </p>
                                <span className="inner-desc">
                                    Gửi hàng đi luôn trong ngày
                                </span>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="icon">
                                <i class="fa-solid fa-money-bill"></i>
                            </div>
                            <div className="content">
                                <p className="inner-title">
                                    Thanh toán linh hoạt
                                </p>
                                <span className="inner-desc">
                                    Tiền mặt/CK/ví điện tử/thẻ
                                </span>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="icon">
                                <i class="fa-solid fa-shoe-prints"></i>
                            </div>
                            <div className="content">
                                <p className="inner-title">
                                    Đổi size thoải mái
                                </p>
                                <span className="inner-desc">
                                    Đến khi anh em hài lòng
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end-section-2 */}

                {/* section-3 */}
                <div className="section-3">
                    <Tabs className="tab" defaultActiveKey="1" items={items} />
                </div>
                {/* end-section-3  */}
            </div>
        </>
    );
}
export default HomePage;
import { Carousel, Tabs } from "antd";
import "./css/home.css";
import AllProducts from "../components/tabs/allProducts";
import NikeShoe from "../components/tabs/nikeShoe";
import AdidasShoe from "../components/tabs/adidasShoe";
import PumaShoe from "../components/tabs/pumaShoe";
import PartnerBrands from "./introduct/card.home";
import AboutSection from "./introduct/banner.section";
import FeatureSection from "./introduct/feature.section";
import { useRef } from "react";

const HomePage = () => {
    const aboutSectionRef = useRef(null);

    const scrollToSection = () => {
        aboutSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const items = [
        {
            key: '/allProducts',
            label: <span className="tab-style">TẤT CẢ CÁC SẢN PHẨM</span>,
            children: <AllProducts />
        },
        {
            key: '/nikeShoe',
            label: <span className="tab-style">GIÀY NIKE</span>,
            children: <NikeShoe />,
        },
        {
            key: '/adidasShoe',
            label: <span className="tab-style">GIÀY ADIDAS</span>,
            children: <AdidasShoe />,
        },
        {
            key: 'pumaShoe',
            label: <span className="tab-style">GIÀY PUMA</span>,
            children: <PumaShoe />,
        },
    ];
    return (
        <>
            <div className="content-home">
                <div className="mt-20">
                    <Carousel arrows infinite={true} autoplay className="banner">
                        <div className="slider-item">
                            <img src="https://antiensport.vn/files/styles/slideshow/public/slideshow/1920x550-Banner-MafateX.jpg?itok=ff5s-BTz" alt="banner" />
                        </div>
                        <div className="slider-item">
                            <img src="https://antiensport.vn/files/styles/slideshow/public/slideshow/1920x550-Banner-OUTLET-SHOPPING-Sale-40PT.jpg?itok=NGohQ634" alt="banner" />
                        </div>
                        <div className="slider-item">
                            <img src="https://antiensport.vn/files/styles/slideshow/public/slideshow/1920x550-Banner-Asic-Sale-off.jpg?itok=D1WEQxR8" alt="banner" />
                        </div>
                    </Carousel>
                </div>

                <PartnerBrands />
                <AboutSection scrollToSection={scrollToSection} />
                <FeatureSection />

                <div className="section-3" ref={aboutSectionRef}>
                    <Tabs className="tab" defaultActiveKey="1" items={items} />
                </div>
            </div>
        </>
    );
}
export default HomePage;
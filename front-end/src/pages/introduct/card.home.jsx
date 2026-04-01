import React from 'react';
import imgCard from './images/Gemini_Generated_Image_qnp2dbqnp2dbqnp2-removebg-preview.png'
import imgCard3 from './images/Gemini_Generated_Image_m2ytj5m2ytj5m2yt-removebg-preview.png'
import imgCard2 from './images/Screenshot_2026-03-31_214223-removebg-preview.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PartnerBrands = () => {
    AOS.init();

    const brands = [
        {
            id: 'nike',
            bgImg: imgCard2,
        },
        {
            id: 'adidas',
            bgImg: imgCard3,
        },
        {
            id: 'puma',
            bgImg: imgCard,
        }
    ];

    return (
        <div className="py-30 px-4 md:px-8 bg-gray-25 w-full">
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
                <h2 className="uppercase font-semibold text-3xl text-gray-900 tracking-tight">Thương Hiệu Đối Tác</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        className="group relative rounded-2xl min-h-[200px] flex items-end cursor-pointer"
                        data-aos="fade-up" data-aos-duration="700"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${brand.bgImg})` }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerBrands;
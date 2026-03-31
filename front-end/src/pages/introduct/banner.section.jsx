import React from 'react';
import imgBanner from './images/Gemini_Generated_Image_korzknkorzknkorz.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const AboutSection = ({ scrollToSection }) => {
    AOS.init();
    return (
        <div className="flex flex-col md:flex-row items-stretch w-full min-h-[400px] bg-white font-sans">
            <div className="w-full md:w-1/2 flex items-center justify-center bg-[#c1c2be]">
                <img
                    src={imgBanner}
                    alt="Shoe Illustration"
                    className="w-1/2 h-full object-contain"
                    data-aos="fade-right" data-aos-duration="1000"
                />
            </div>

            {/* Bên phải: Nội dung văn bản */}
            <div className="w-full md:w-1/2 bg-[#f2f4f5] flex flex-col justify-center p-12 lg:p-20">
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase italic text-[#febb0a]">
                    <TypeAnimation
                        sequence={[
                            'NIKE',
                            1000,
                            'ADIDAS',
                            2000,
                            'PUMA',
                            1000,
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </h2>

                <p className="text-[#4a4a4a] text-lg leading-relaxed font-light italic" data-aos="fade-left" data-aos-duration="1000">
                    Khởi đầu từ một cửa hàng nhỏ với niềm đam mê lớn dành cho{' '}
                    <span className="font-bold not-italic">Nike & Adidas</span>.
                    <span className="font-bold"> beck.</span> nhận thấy sự thiếu hụt của một nơi cung cấp
                    giày Authentic uy tín giữa thị trường vàng thau lẫn lộn.
                    Chúng tôi quyết định tạo ra một sân chơi, nơi "Fake" là từ không tồn tại.
                </p>
                <div>
                    <button
                        onClick={scrollToSection}
                        className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-[#febb0a] transition duration-500 mt-10 font-bold"
                        data-aos="fade-left" data-aos-duration="1000"
                    >
                        Khám phá ngay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
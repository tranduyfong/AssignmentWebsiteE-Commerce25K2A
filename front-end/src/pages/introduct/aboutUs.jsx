import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      <div className="relative w-full h-162.5 bg-gray-900 flex flex-col items-center justify-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop" 
          alt="Beck Shoes Banner"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        
        <div className="relative z-20 text-center px-4 animate-fade-in-up">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-gray-300">Est. 2024</p>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6">
            beck.
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto text-gray-200">
            Hơn cả một đôi giày. Đó là tuyên ngôn của chính bạn.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold uppercase mb-6 tracking-wide">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Chúng tôi không bán những đôi giày vô tri. Tại <span className="font-bold text-black italic">beck.</span>, chúng tôi cung cấp những mảnh ghép để hoàn thiện bức tranh cá tính của bạn. Sinh ra từ đường phố, lớn lên cùng văn hóa Sneaker, chúng tôi hiểu rằng mỗi bước đi đều cần sự tự tin tuyệt đối.
        </p>
      </div>

      <div className="w-full">
        
        <div className="flex flex-col md:flex-row h-auto md:h-112.5">
          <div className="w-full md:w-1/2 h-100 md:h-full relative">
             <img 
               src="https://www.shutterstock.com/image-vector/sneakers-sports-shoes-continuous-one-600nw-2629828535.jpg" 
               alt="Sneaker Culture" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center p-12 md:p-24">
            <h3 className="text-4xl font-black uppercase mb-6 text-black" style={{ color: '#000000' }}>Khởi đầu</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Khởi đầu từ một cửa hàng nhỏ với niềm đam mê lớn dành cho <span className="font-bold text-black">Nike & Adidas</span>. 
              <span className="font-bold text-black italic"> beck.</span> nhận thấy sự thiếu hụt của một nơi cung cấp giày Authentic uy tín giữa thị trường vàng thau lẫn lộn.
              Chúng tôi quyết định tạo ra một sân chơi, nơi "Fake" là từ không tồn tại.
            </p>
          </div>
        </div>

        <div className="w-full bg-white py-20 px-6 md:px-24">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            
            <div className="w-full md:w-1/3">
              <h3 className="text-4xl md:text-5xl font-black text-black uppercase leading-tight" style={{ color: '#000000' }}>
                Hành trình <br/> kiến tạo <br/> phong cách
              </h3>
            </div>

            <div className="w-full md:w-2/3 space-y-8 pt-2">
              <div className="border-l-3 border-gray-100 hover:border-black transition duration-300 pl-6">
                <span className="font-bold text-black text-xl block mb-1">2024</span>
                <p className="text-gray-600 text-lg leading-relaxed">
                   Khởi đầu từ một căn phòng nhỏ với 50 đôi giày Nike Air Jordan đầu tiên. <span className="font-bold text-black italic">beck.</span> ra đời với khát khao mang giày Authentic giá tốt đến tay sinh viên.
                </p>
              </div>

              <div className="border-l-3 border-gray-100 hover:border-black transition duration-300 pl-6">
                <span className="font-bold text-black text-xl block mb-1">2025</span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mở rộng quy mô với Website thương mại điện tử tích hợp công nghệ quản lý tồn kho Real-time. Chúng tôi không chỉ bán giày, chúng tôi bán sự an tâm tuyệt đối.
                </p>
              </div>

              <div className="border-l-3 border-gray-100 hover:border-black transition duration-300 pl-6">
                <span className="font-bold text-black text-xl block mb-1">Hiện tại</span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-bold text-black italic">beck.</span> đã trở thành điểm đến tin cậy của cộng đồng Sneakerhead Hà Nội, hướng tới mục tiêu phủ sóng toàn quốc vào năm 2030.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="border-l-4 border-gray-900 hover:border-white transition duration-300 pl-8">
            <h3 className="text-5xl font-black uppercase mb-6 tracking-tighter text-gray-300 " style={{ color: '#ffffff' }}>Tầm nhìn</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              "Trở thành <span className="text-white font-bold">Biểu tượng số 1</span> về văn hóa Sneaker chính hãng tại Việt Nam vào năm 2030. Xây dựng một hệ sinh thái nơi thời trang và công nghệ giao thoa."
            </p>
          </div>

          <div className="border-l-4 border-gray-900 hover:border-white transition duration-300 pl-8">
            <h3 className="text-5xl font-black uppercase mb-6 tracking-tighter text-gray-300 " style={{ color: '#ffffff' }}>Sứ mệnh</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              "Xóa bỏ nỗi lo hàng giả. <span className="font-bold text-white italic">beck.</span> cam kết mang đến những đôi giày <span className="text-white font-bold">Chuẩn Authentic</span> với trải nghiệm mua sắm đẳng cấp, tốc độ và tận tâm nhất."
            </p>
          </div>

        </div>
      </div>

      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-center mb-16 tracking-wide">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-hover:text-white transition">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold uppercase mb-3">100% Authentic</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Phát hiện hàng Fake đền bù gấp 10 lần giá trị sản phẩm. Uy tín là vàng.</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-hover:text-white transition">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold uppercase mb-3">Free Shipping</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Miễn phí vận chuyển cho mọi đơn hàng trên 2.000.000đ. Giao hàng hỏa tốc nội thành.</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-hover:text-white transition">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h4 className="text-xl font-bold uppercase mb-3">7 Days Return</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Hỗ trợ đổi size, đổi mẫu trong vòng 07 ngày. Thủ tục đơn giản, nhanh chóng.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
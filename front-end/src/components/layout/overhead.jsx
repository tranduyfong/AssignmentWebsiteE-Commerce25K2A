import { useState } from "react";

const OverHead = () => {  
  const [text, setText] = useState("");

  const xuLyBamTimKiem = () => {
    alert("Bạn đang tìm: " + text);
};
  const EnterTimKiem = (e) => {
    if(e.key === 'Enter'){
      xuLyBamTimKiem();
  };
};
  
  return (
    <div className=" w-full h-18 bg-white py-3 border-b border-gray-100">
      <div className="max-w-250 mx-auto flex items-center justify-between px-5">
        <div className="text-5xl font-black italic tracking-tighter cursor-pointer">
          beck.
        </div>
        <div className="flex-1 mx-10 relative">
          <input
            type="text"
            placeholder="Nhập thông tin tìm kiếm"
            className="w-full bg-[#333333] text-white py-2 px-4 outline-none text-sm placeholder-gray-400"
            value={text}
            onChange={(p) => setText(p.target.value)}
            onKeyDown={EnterTimKiem}
          />

          <button
            onClick={xuLyBamTimKiem}
            className="absolute right-0 top-0 h-full px-3 text-white hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="text-gray-500 hover:text-black cursor-pointer">
            <span>Đăng nhập</span> / <span>Đăng ký</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-bold">GIỎ HÀNG</div>
              <div className="text-gray-500 text-xs">(0) sản phẩm</div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#ffcc00] px-3 py-2 cursor-pointer hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <div className="font-bold text-[10px] uppercase">
              Kiểm tra <br /> đơn hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverHead;

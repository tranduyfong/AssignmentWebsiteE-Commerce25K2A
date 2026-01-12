# Tài Liệu Phân Tích Thiết Kế Hệ Thống

Đề tài: Trang Website Thương Mại Điện Tử - Bán Giày Thể Thao Chính Hãng 100%

nnanh test

I) Xác định phạm vi và đối tưởng sử dụng hệ thống

1. Đối tượng sử dụng hệ thống
   a, Nhóm khách hàng

   - Khách vãng lai(Guest):

     - Người chưa đăng kí tài khoản
     - Nhu cầu: Tìm kiếm nhanh, xem mẫu mã, so sánh giá, muốn mua hàng nhanh (checkout không cần đăng nhập)
   - Thành viên (member):

     - Người đã có tài khoản
     - Nhu cầu: Lưu trữ lịch sử mua hàng, tích điểm, nhận mã giảm giá, lưu địa chỉ giao hàng để không phải nhập lại
   - Phân khúc khách hàng và mục tiêu:

     - Người sưu tập giày: Quan tâm đến những sản phẩm limited, ngày phát hành, tính xác thực
     - Người chơi thể thao: Quan tâm đến hiệu năng, công nghệ đế, độ êm, hỗ trợ vận động khi chơi thể thao
     - Người đam mê thời trang: Quan tâm mẫu mã đẹp, giá cả, độ thịnh hành

   b, Nhóm quản trị viên

   - Admin: Có toàn quyền hệ thống, tạo tài khoản cho nhân viên, xem báo cáo doanh thu tổng quan
   - Nhân viên bán hàng / Quản lý: Tiếp nhận đơn hàng, xác nhận đơn, hỗ trợ khách qua chat, cập nhật trạng thái giao hàng, viết bài blog, đăng sản phẩm, quản lý số lượng tồn kho, nhập hàng mới, cập nhật size/màu sắc còn hay hết
2. Phạm vi hệ thống

   a, Mục tiêu phạm vi hệ thống:

   - Hệ thống website bán giày thể thao được xây dựng nhằm:
     - Tin học hóa quy trình bán giày thể thao trực tuyến.
     - Hỗ trợ khách hàng tìm kiếm, lựa chọn và mua sản phẩm qua Internet.
     - Hỗ trợ quản lý cửa hàng trong việc quản lý sản phẩm, đơn hàng và khách hàng.
     - Cung cấp thông tin phục vụ công tác thống kê và ra quyết định quản lý.

   b, Ranh giới

   - Ranh giới hệ thống Hệ thống bao gồm các nghiệp vụ bán hàng trực tuyến thông qua website và không bao gồm các nghiệp vụ bán hàng trực tiếp tại cửa hàng.
   - Hệ thống đóng vai trò trung gian giữa:
     - Khách hàng
     - Nhân viên / Quản lý

   c, Phạm vi chức năng của hệ thống

   - Nhóm chức năng dành cho khách hàng:
     - Xem danh sách sản phẩm và thông tin chi tiết sản phẩm.
     - Tìm kiếm, lọc và sắp xếp giày theo các tiêu chí.
     - Đăng ký, đăng nhập và quản lý thông tin cá nhân.
     - Thêm sản phẩm vào giỏ hàng và tạo đơn đặt hàng.
     - Lựa chọn phương thức thanh toán.
     - Theo dõi trạng thái đơn hàng và lịch sử mua hàng.
   - Nhóm chức năng dành cho nhân viên / quản lý
     - Quản lý danh mục sản phẩm và thương hiệu.
     - Thêm, sửa, xóa thông tin sản phẩm.
     - Quản lý tồn kho. Xử lý và cập nhật trạng thái đơn hàng.
     - Quản lý thông tin khách hàng.
     - Thống kê doanh thu, số lượng bán ra.
   - Nhóm chức năng dành cho quản trị hệ thống
     - Quản lý tài khoản người dùng và phân quyền.
     - Cấu hình hệ thống.
     - Sao lưu và bảo mật dữ liệu.
   - Phạm vi dữ liệu của hệ thống
     - Hệ thống quản lý các nhóm dữ liệu chính:
       - Dữ liệu sản phẩm (giày, thương hiệu, kích cỡ, giá bán).
       - Dữ liệu khách hàng (tài khoản, thông tin liên hệ).
       - Dữ liệu đơn hàng (giỏ hàng, hóa đơn, trạng thái).
       - Dữ liệu thanh toán và giao hàng.
       - Dữ liệu thống kê, báo cáo.
   - Phạm vi các tác nhân (Actor)
     - Khách hàng: người sử dụng website để mua giày.
     - Nhân viên bán hàng: xử lý đơn hàng và quản lý sản phẩm.
     - Quản trị viên: quản lý và duy trì hệ thống.
   - Phạm vi triển khai
     - Hệ thống được triển khai trên nền tảng web.
     - Người dùng truy cập thông qua trình duyệt Internet.
     - Phạm vi phục vụ chủ yếu trong lãnh thổ Việt Nam

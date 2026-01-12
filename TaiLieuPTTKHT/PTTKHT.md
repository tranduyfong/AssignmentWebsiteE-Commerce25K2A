# Tài Liệu Phân Tích Thiết Kế Hệ Thống

Đề tài: Trang Website Thương Mại Điện Tử - Bán Giày Thể Thao Chính Hãng 100%

**I. Xác định yêu cầu hệ thống:**

1. **Yêu cầu chức năng:**

    Hệ thống quản lý bán giày thể thao chính hãng có chức năng
lưu trữ và xử lý toàn bộ thông tin quan trọng phục vụ cho hoạt động kinh doanh
hằng ngày, bao gồm dữ liệu về nhân viên, giày(size giày, mẫu mã, …), hóa đơn và
các báo cáo thống kê. Việc quản lý thông tin đầy đủ và chính xác giúp cửa hàng
hạn chế sai sót, tiết kiệm thời gian và tối ưu hiệu quả làm việc.

    **1.1 Quản lý nhập giày**

    •**1.1.1**. Thêm mới giày: Hệ thống cho phép thêm mới thông tin giày (tên, mã, hãng, giá nhập,size số, năm sản xuất, nhà cung cấp…).

    •**1.1.2**. Sửa thông tin giày: Hệ thống cho phép chỉnh sửa thông tin giày khi có sự thay đổi (giá cả, nhà cung cấp, hết size …).

    •**1.1.3**. Xóa giày: Hệ thống cho phép xóa giày khỏi kho trong trường hợp ngừng kinh doanh, hết size hoặc nhập sai dữ liệu.

    • **1.1.4**. Lập đơn mua: Hệ thống hỗ trợ lập đơn đặt hàng từ nhà cung cấp dựa trên nhu cầu tồn kho.

    •**1.1.5**. Lập phiếu nhập: Khi nhận giày từ nhà cung cấp, hệ thống cho phép lập phiếu nhập để cập nhật số lượng, giá nhập và tình trạng hàng vào kho.

    **1.2. Quản lý xuất giày**

    •**1.2.1** Kiểm tra yêu cầu: Hệ thống tiếp nhận và kiểm tra yêu cầu mua giày từ khách hàng.

    •**1.2.2**. Nhận đơn đặt hàng: Hệ thống ghi nhận đơn đặt hàng, lưu thông tin khách hàng, loại giày, size giày, số lượng và hình thức thanh toán.

    •**1.2.3**. Đối chiếu đơn: Hệ thống cho phép nhân viên kiểm tra, đối chiếu đơn hàng với tồn kho, xem giày có còn size hay mẫu mã có còn kinh doanh để đảm bảo chính xác.

    •**1.2.4**. Hóa đơn: Hệ thống hỗ trợ lập hóa đơn bán giày cho khách hàng, cập nhật số lượng giày trong kho và doanh thu.

    **1.3. Quản lý nhân viên**

    •**1.3.1**. Thêm mới nhân viên: Quản trị viên có thể thêm thông tin nhân viên mới (họ tên, tài khoản, chức vụ, liên hệ…).

    •**1.3.2**. Sửa thông tin: Cho phép chỉnh sửa thông tin nhân viên khi có thay đổi.

    •**1.3.3**. Xóa nhân viên: Hệ thống cho phép xóa tài khoản nhân viên khi nghỉ việc hoặc vi phạm.

    **1.4. Báo cáo**

    •**1.4.1**. Báo cáo doanh thu: Hệ thống thống kê doanh thu theo ngày, tháng, năm hoặc theo nhân viên bán hàng.

    •**1.4.2**. Báo cáo tồn kho: Thống kê số lượng giày còn lại trong kho, giày tồn k còn nguyên vẹn(ố màu, hỏng keo, rách,…), mẫu giày bán chạy/chậm.

    •**1.4.3**. Báo cáo khách hàng: Thống kê số lượng khách hàng mua hàng, lịch sử giao dịch và các thông tin liên quan.

    •**1.4.4**. Báo cáo danh sách nhà cung cấp: Hệ thống cho phép xem báo cáo về các nhà cung cấp, bao gồm số lần nhập, giá trị nhập, mức độ uy tín.

2. **Yêu cầu phi chức năng**:

    **2.1. Hiệu năng**

- Hệ thống phải đảm bảo tốc độ xử lý nhanh chóng, ổn định để đáp ứng nhu cầu phục vụ khách hàng.Mỗi giao dịch bán giày (từ lúc nhập thông tin đến khi in/xuất hóa đơn) cần được xử lý trong vòng < 10 giây, đảm bảo không gây gián đoạn cho nhân viên và khách hàng.
- Hệ thống có khả năng phục vụ đồng thời 50-100 người dùng trong cùng một thời điểm, bao gồm nhân viên bán hàng, nhân viên kho và quản lý, mà không bị treo máy, giật lag hay mất dữ liệu.
- Các thao tác tìm kiếm giày, tra cứu báo cáo và thống kê phải được trả kết quả ngay lập tức (thời gian phản hồi dưới 2 giây với truy vấn thông thường).

    **2.2. Bảo mật**

- Bảo mật thông tin là yếu tố then chốt của hệ thống quản lý bán giày thể thao.
- Người dùng bắt buộc phải đăng nhập bằng tài khoản và mật khẩu, có thể kết hợp với cơ chế OTP (One-Time Password) để thêm được mẫu giày vào giỏ hàng, thanh toán và bảo mật thông tin...
- Dữ liệu nhạy cảm như thông tin khách hàng, đơn mua giày hoặc dữ liệu kinh doanh phải được mã hóa trong cơ sở dữ liệu và trong quá trình truyền tải để tránh rò rỉ thông tin.
- Hệ thống cần có cơ chế phân quyền truy cập dữ liệu, đảm bảo mỗi nhân viên chỉ được phép truy cập vào phạm vi dữ liệu cần thiết cho công việc của mình.
- Cung cấp chức năng sao lưu dữ liệu tự động theo chu kỳ (hàng ngày/tuần/tháng) để phòng ngừa trường hợp mất mát hoặc hỏng hóc dữ liệu.

    **2.3. Độ tin cậy & Khả dụng**

- Hệ thống phải luôn trong trạng thái sẵn sàng phục vụ.
- Yêu cầu hoạt động 24/7 với độ sẵn sàng ≥ 99,9%, hạn chế tối đa tình trạng ngừng dịch vụ.
- Có cơ chế dự phòng và khôi phục dữ liệu sau sự cố, bao gồm chức năng backup – restore nhanh chóng, giúp đảm bảo không mất dữ liệu quan trọng trong trường hợp lỗi hệ thống hoặc sự cố phần cứng.
- Hệ thống phải chịu được các tình huống bất thường như mất điện, mạng chập chờn mà không gây hỏng cơ sở dữ liệu.

  **2.4. Khả năng mở rộng**
- Phần mềm phải được thiết kế theo hướng linh hoạt và dễ mở rộng.
- Có thể nâng cấp để quản lý cùng lúc nhiều chi nhánh cửa hàng và đồng bộ dữ liệu về một hệ thống trung tâm.
- Dễ dàng tích hợp với các phần mềm kế toán, quản lý nhân sự, hệ thống ngân hàng( trong trường hợp khách hàng mua trả góp) và các cổng thanh toán trực tuyến.
- Hỗ trợ khả năng mở rộng về cơ sở dữ liệu, có thể quản lý hàng triệu bản ghi khi quy mô cửa hàng phát triển.

    **2.5. Khả năng sử dụng**

- Hệ thống phải thân thiện, dễ dùng đối với nhân viên ở nhiều trình độ khác nhau.
- Giao diện đơn giản, trực quan, các chức năng được sắp xếp hợp lý để người dùng có thể thao tác nhanh mà không cần đào tạo quá nhiều.
- Hỗ trợ tìm kiếm mẫu giày nhanh theo mã, tên, hãng,...
- Có chức năng gợi ý tên giày tự động khi người dùng nhập từ khóa, giúp giảm sai sót khi nhập dữ liệu.
- Có khả năng hỗ trợ đa ngôn ngữ (tiếng Việt, tiếng Anh…) trong trường hợp cửa hàng có nhu cầu mở rộng hoặc phục vụ khách hàng quốc tế.

    **2.6. Bảo trì & Nâng cấp**

- Hệ thống cần dễ dàng bảo trì, sửa lỗi và cập nhật khi có yêu cầu mới.
- Cho phép cập nhật danh mục giày mới thường xuyên mà không làm gián đoạn hoạt động kinh doanh.
- Có khả năng nâng cấp lên phiên bản cao hơn của cơ sở dữ liệu, framework hoặc hệ điều hành mà không ảnh hưởng đến dữ liệu hiện tại.
- Hỗ trợ bảo trì từ xa, giúp đội ngũ kỹ thuật dễ dàng xử lý sự cố mà không mất nhiều thời gian.

    **2.7. Tuân thủ pháp lý**

- Hệ thống phải đảm bảo tuân thủ đầy đủ các quy định pháp luật liên quan đến lĩnh vực kinh doanh( đóng thuế doanh nghiệp, hàng nhập rõ nguồn gốc,…)
- Cam kết mẫu mã bán ra đều là hàng chính hãng và có bảo hành trong trường hợp khách hàng phát hiện giày fake.

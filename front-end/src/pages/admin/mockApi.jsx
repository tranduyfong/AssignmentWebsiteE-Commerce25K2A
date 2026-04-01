import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 500 });

let mockData = [
  { _id: "1", name: "Trần Duy Phong", email: "phong.td@gmail.com", phone: "0862885143", role: "admin" },
  { _id: "2", name: "Đặng Văn Minh", email: "minh.dm@gmail.com", phone: "0378052100", role: "staff" },
  { _id: "3", name: "Nguyễn Văn Kiên", email: "kien.nv@gmail.com", phone: "0988298796", role: "staff" },
  { _id: "4", name: "Nguyễn Đức Chính", email: "chinh.nd@gmail.com", phone: "0977111222", role: "staff" },
  { _id: "5", name: "Nguyễn Thái Vinh", email: "vinh.nt@gmail.com", phone: "0933444555", role: "staff" },
  { _id: "6", name: "Nguyễn Văn A", email: "abc.def@gmail.com", phone: "0944999888", role: "staff" },
];

mock.onGet("/api/admin/users").reply(() => {
  return [200, { data: [...mockData] }];
});

mock.onPost("/api/admin/users").reply((config) => {
  const newUser = JSON.parse(config.data);
  newUser._id = Math.random().toString(36).substr(2, 9); // tạo id ngẫu nhiên
  mockData.push(newUser);
  return [200, { message: "Thành công" }];
});

mock.onPut(/\/api\/admin\/users\/.*/).reply((config) => {
  const updatedUser = JSON.parse(config.data);
  const id = config.url.split("/").pop(); 
  mockData = mockData.map(user => user._id === id ? { ...user, ...updatedUser } : user);
  return [200, { message: "Thành công" }];
});

mock.onDelete(/\/api\/admin\/users\/.*/).reply((config) => {
  const id = config.url.split("/").pop(); 
  mockData = mockData.filter(user => user._id !== id);
  return [200, { message: "Thành công" }];
});

export default mock;
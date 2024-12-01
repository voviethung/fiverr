import axios, { AxiosRequestConfig } from "axios";
// import { history } from "../index";

export const config = {
  setCookie: (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  eraseCookie: (name) => {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
  getStore: (name) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
    return null;
  },
  setStore: (name, value) => {
    localStorage.setItem(name, value);
  },
  setStoreJson: (name, value) => {
    let json = JSON.stringify(value);
    localStorage.setItem(name, json);
  },
  getStoreJson: (name) => {
    if (localStorage.getItem(name)) {
      let result = localStorage.getItem(name);
      return JSON.parse(result);
    }
    return null;
  },
  clearStore: (name) => {
    localStorage.removeItem(name);
  },
  timeout: (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  },
  ACCESS_TOKEN: "access_token",
  USER_LOGIN: "userLogin",
  ID_LOGIN: "id_login",
  ROLE_lOGIN: "role_login",
};

export const {
  setCookie,
  getCookie,
  setStore,
  getStore,
  setStoreJson,
  getStoreJson,
  clearStore,
  timeout,
  ACCESS_TOKEN,
  USER_LOGIN,
  ID_LOGIN,
  ROLE_lOGIN,
} = config;

/**Cấu hình request cho tất cả api cũng như response cho tất cả kết quả từ api trả về */
//cấu hình domain gửi đi:
const DOMAIN = "https://fiverrnew.cybersoft.edu.vn/api";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M";
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
//---Cấu hình request header
http.interceptors.request.use(
  (config) => {
    const token = getStore(ACCESS_TOKEN);
    config.headers = {
      ...config.headers,
      ["token"]: `${token}`,
      ["TokenCybersoft"]: TOKEN_CYBERSOFT,
    };
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//---Cấu hình kết quả trả về (response)
http.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err.response.status);
    //bắt lỗi không hợp lệ
    if (err.response.status === 400 || err.response.status === 404) {
      console.log(err.response.data.content);
      //   history.push("/");
      return Promise.reject(err);
    }
    if (err.response.status === 401 || err.response.status === 403) {
      // alert("Token không hợp lệ ! vui lòng đăng nhập lại. ");
      //   history.push("/login");
      return Promise.reject(err);
    }
  }
);

/**
 * 
 * status code
 * 400: Tham số gởi lên không hợp lệ => kết quả không tìm được ( Badrequest )
 * 
 * 404: Tham số gởi lên hợp lệ nhưng không tìm thấy => Có thể bị xoá rồi ( Not found )...
 * 
 * 200: Thành công, OK
 * 
 * 201: Đã được tạo thành công => ( Mình đã tạo ra rồi sau đó request tiếp thì sẽ trả 201 ) (Created)
 * 
 * 401: Không có quyền truy cập vào api đó ( Unathorize - có thể do token không hợp lệ họăc bị admin chặn )
 * 
 * 403: Chưa đủ quyền truy cập api đó ( Forbiden - token hợp lệ tuy nhiên token đó chưa đủ quyền truy cập vào api )
 * 
 * 500: Lỗi xảy ra tại sever ( Nguyên nhân có thể fondtend gửi dữ liệu không hợp lệ => backend trong quá trình xử lý code gây ra lỗi
        hoặc do backend code bị lỗi => Eror in sever)
        

// localStorage.removeItem("access_token");
// localStorage.removeItem("userLogin");
// localStorage.removeItem("role_login");
// localStorage.removeItem("id_login");
 */

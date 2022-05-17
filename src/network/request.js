import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 8000,
  });
  // 拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      // console.log(err);
    }
  );
  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      // console.log(res.data);
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  // 发送网络请求
  return instance(config);
}

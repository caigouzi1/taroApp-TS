import Taro from "@tarojs/taro";

const baseUrl = "http://blog.elpsycongroo.xyz/blogApi";
const noConsole = "";

export default (url, data = {}, method = "POST") => {
  if (!noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${url} 】P=${JSON.stringify(data)}`
    );
  }
  return Taro.request({
    url: baseUrl + url,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
    method: method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.errMsg !== "ok") {
        Taro.showToast({
          title: `${res.errMsg}~` || res.errCode,
          icon: "none",
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};

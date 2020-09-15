import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/veal/user/login",
    method: "post",
    data,
  });
}

import http from "@/utils/http";

export default {
  async articleAll(params) {
    return await http("/article/all", params);
  },
};

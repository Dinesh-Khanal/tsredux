import api from "./api";

const userService = {
  async getUsers() {
    const response = await api.get("users");
    return response.data;
  },
};
export default userService;

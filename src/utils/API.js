import axios from "axios";

export default {
  getUsers: function(query) {
    return axios.get("https://randomuser.me/api/?results=25&nat=us");
  }
};

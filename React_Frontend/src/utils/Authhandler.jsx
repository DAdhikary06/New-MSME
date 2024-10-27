import axios from "axios";
import Config from "../utils/Config";

const AuthHandler = {
  login: (username, password, callback) => {
    axios
      .post(Config.loginUrl, { username: username, password: password })
      .then((response) => {
        if (response.status === 200) {
          
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("refresh", response.data.refresh);
          callback({ error: false, message: "Login Successfull..." });
        }
      })
      .catch((error) => {
        callback({
          error: true,
          message: "Error During Login Invalid Login Details..",
        });
      });
  },
};

export default AuthHandler;
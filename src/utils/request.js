import axios from "axios";

function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
    });
}

export default request;

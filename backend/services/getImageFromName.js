const axios = require("axios");
//https://api.imgur.com/3/account/Amidoo/image/uz7FVR9
module.exports = function getGalleries() {
  return axios({
    method: "get",
    url: "https://api.imgur.com/3/image/VAVAVA",
    headers: {
        authorization: "Client-ID " + process.env.CLIENT_ID,
        authorization: "Bearer " + process.env.ACCESS_TOKEN
    },
  });
};

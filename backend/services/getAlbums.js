const axios = require("axios");

module.exports = function getGalleries() {
  return axios({
    method: "get",
    url: "https://api.imgur.com/3/account/Amidoo/albums",
    headers: {
        authorization: "Client-ID " + process.env.CLIENT_ID,
        authorization: "Bearer " + process.env.ACCESS_TOKEN
    },
  });
};

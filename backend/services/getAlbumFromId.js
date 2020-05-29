const axios = require("axios");

module.exports = function getGalleries(albumId) {
  return axios({
    method: "get",
    url: "https://api.imgur.com/3/account/Amidoo/album/" + albumId,
    headers: {
        authorization: "Client-ID " + process.env.CLIENT_ID,
        authorization: "Bearer " + process.env.ACCESS_TOKEN
    },
  });
};

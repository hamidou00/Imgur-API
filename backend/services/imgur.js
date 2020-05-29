const url = "https://api.imgur.com/3/account/Amidoo";
const url2 = "https://api.imgur.com/3/gallery";
const url3 = "https://api.imgur.com/3/image/XYClGDl";
//const url4 = "https://api.imgur.com/3/gallery/hot/viral/0";
const url5 = "https://api.imgur.com/3/account/Amidoo/images";
const url6 = "https://api.imgur.com/oauth2/authorize?client_id=7da9bb1acfc6b08&response_type=token";

const axios = require("axios");

module.exports = function getGalleries() {
  return axios({
    method: "get",
    url: "https://api.imgur.com/3/gallery/hot/viral/0",
    headers: {
      authorization: "Client-ID " + process.env.CLIENT_ID,
    },
  });
};

const uuid = require("uuid").v4;

const generatePartyId = (req, res, next) => {
  const { method, url, body } = req;
  const consentedUrls = ["/signup", "/register"];

  if (method === "POST" && consentedUrls.includes(url) && body.type === "master") {
    body.partyId = uuid();
  }
  next();
};

module.exports = generatePartyId;

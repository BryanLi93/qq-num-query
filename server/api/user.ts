const koa2Req = require("koa2-request");

module.exports.getQQInfoByQQ = async function (qq) {
  const res = await koa2Req({
    method: "get",
    url: `https://api.uomg.com/api/qq.info?qq=${qq}`,
  });
  //   return res.body.data;
  return res.body;
};

const Koa = require("koa");
const app = new Koa();
const { getQQInfoByQQ } = require("./api/user.ts");

app.use(async (ctx) => {
  const path = ctx.request.path;
  if (path === "/api/qq.info") {
    const res = await getQQInfoByQQ(ctx.request.query.qq);
    console.log(res);
    ctx.response.type = "json";
    ctx.response.body = res;
  }
});

app.listen(3001);
console.log("server start...");

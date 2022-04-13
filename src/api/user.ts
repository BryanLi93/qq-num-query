/**
 * 根据 qq号获取用户信息
 * @param qq
 * @returns
 */
export async function getUserByQQ(qq: string): Promise<User> {
  return fetch(`/api/qq.info?qq=${qq}`)
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
      throw new Error("服务器异常");
    })
    .then(({ code, name, qq, qlogo, msg }) => {
      if (code === 1) return { name, qq, qlogo };
      throw new Error(msg);
    });
}

/**
 * 验证是否 qq号
 * @param qq
 * @returns
 */
export function isQQ(qq = "") {
  return /^[1-9]\d{4,10}$/.test(qq);
}

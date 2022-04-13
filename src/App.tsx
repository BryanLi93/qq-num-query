import Style from "./App.module.sass";
import { useRequest } from "ahooks";
import { useState } from "react";
import { getUserByQQ } from "./api/user";
import LoadingTip from "./components/LoadingTip";
import QQInput from "./components/QQInput";
import Title from "./components/Title";
import UserGrid from "./components/UserGrid";
import Space from "./compotentsUI/Space";

// const mockUser: User = {
//   name: "留白",
//   qq: "813595700",
//   qlogo: "https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=813595706",
// };

function App() {
  // 接口返回的用户信息
  const [user, setUser] = useState<User>();

  /**
   * 接口请求优化方案
   * 1. 输入内容校验、提示
   * 2. 请求防抖
   */
  const { run: getUserByQQRun, loading } = useRequest(getUserByQQ, {
    manual: true,
    onSuccess(res: User) {
      setUser(res);
    },
    onError(e) {
      alert(e);
    },
  });

  return (
    <div className={Style.App}>
      {/* 标题 */}
      <Title text="QQ号查询" />
      {/* 输入框 */}
      <QQInput onChange={(v) => getUserByQQRun(v)} />
      <Space />
      {/* 用户信息显示 */}
      {user && (
        <>
          <UserGrid user={user} />
          <Space />
        </>
      )}
      {loading && <LoadingTip text="查询中..." />}
    </div>
  );
}

export default App;

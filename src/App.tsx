import Title from "./components/Title";
import QQInput from "./components/QQInput";
import { useState } from "react";
import UserGrid from "./components/UserGrid";
import { useRequest } from "ahooks";
import { getUserByQQ } from "./api/user";
import LoadingTip from "./components/LoadingTip";
import Space from "./compotentsUI/Space";

// const mockUser: User = {
//   name: "留白",
//   qq: "813595700",
//   qlogo: "https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=813595706",
// };

function App() {
  // 接口返回的用户信息
  const [user, setUser] = useState<User>();

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
    <div className="App">
      <Title text="QQ号查询" />
      <QQInput onChange={(v) => getUserByQQRun(v)} />
      <Space />
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

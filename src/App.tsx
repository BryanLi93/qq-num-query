import "./App.css";
import Title from "./components/Title";
import QQInput from "./components/QQInput";
import { useCallback, useState } from "react";
import UserGrid from "./components/UserGrid";
import { useRequest } from "ahooks";
import { getUserByQQ } from "./api/user";

// const mockUser: User = {
//   name: "留白",
//   qq: "813595700",
//   qlogo: "https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=813595706",
// };

function App() {
  // 接口返回的用户信息
  const [user, setUser] = useState<User>();

  const onChange = useCallback(async (value: string) => {
    try {
      const newUser = await getUserByQQ(value);
      setUser(newUser);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <div className="App">
      <Title text="QQ号查询" />
      <QQInput onChange={onChange} />
      {user && <UserGrid user={user} />}
    </div>
  );
}

export default App;

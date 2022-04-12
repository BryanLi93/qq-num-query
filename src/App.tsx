import "./App.css";
import Title from "./components/Title";
import QQInput from "./components/QQInput";
import { useCallback } from "react";
import UserGrid from "./components/UserGrid";

const mockUser: User = {
  name: "Bryan",
  qq: "813595700",
  qlogo: "https://create-react-app.dev/img/logo.svg",
};

function App() {
  const onChange = useCallback((value: string) => {
    console.log(value);
  }, []);

  return (
    <div className="App">
      <Title text="QQ号查询" />
      <QQInput onChange={onChange} />
      <UserGrid user={mockUser} />
    </div>
  );
}

export default App;

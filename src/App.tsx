import "./App.css";
import Title from "./components/Title";
import QQInput from "./components/QQInput";
import { useCallback } from "react";

function App() {
  const onChange = useCallback((value: string) => {
    console.log(value);
  }, []);

  return (
    <div className="App">
      <Title text="QQ号查询" />
      <QQInput onChange={onChange} />
    </div>
  );
}

export default App;

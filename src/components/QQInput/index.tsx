import { useDebounceFn } from "ahooks";
import { useState } from "react";
import Style from "./index.module.sass";
import { isQQ } from "../../utils/validate";

type TProps = {
  defaultValue?: string;
  onChange: (value: string) => void;
};

export default function ({ defaultValue, onChange }: TProps) {
  const [errMsg, setErrMsg] = useState("");

  const onChangeQQNumber = (value: string) => {
    if (isQQ(value)) {
      onChange(value);
      setErrMsg("");
      return;
    }
    setErrMsg("qq号格式有误，请检查");
  };

  const { run: debounceInputRun } = useDebounceFn(onChangeQQNumber, {
    wait: 300,
  });

  return (
    <div className={Style["qq-input"]}>
      <label htmlFor="input--qq">QQ</label>
      <input
        id="input--qq"
        className={errMsg ? "input--error" : ""}
        maxLength={11}
        defaultValue={defaultValue}
        placeholder="请输入QQ号，位数5～11"
        onInput={(e) => debounceInputRun(e.currentTarget.value)}
      />
      <span className="err-msg">{errMsg}</span>
    </div>
  );
}

import { useDebounceFn } from "ahooks";

type TProps = {
  defaultValue?: string;
  onChange: (value: string) => void;
};

export default function ({ defaultValue, onChange }: TProps) {
  const onChangeQQNumber = (value: string) => {
    // TODO: 校验
    onChange(value);
  };

  const { run: debounceInputRun } = useDebounceFn(onChangeQQNumber, {
    wait: 300,
  });

  return (
    <>
      <label>QQ</label>
      <input
        defaultValue={defaultValue}
        onInput={(e) => debounceInputRun(e.currentTarget.value)}
      />
    </>
  );
}

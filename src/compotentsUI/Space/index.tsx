type TProps = {
  height?: number;
};

export default function ({ height = 15 }: TProps) {
  return <div style={{ height }}></div>;
}

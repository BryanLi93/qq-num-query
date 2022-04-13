import loadingImg from "../../assets/loading.gif";

type TProps = {
  text: string;
};

export default function ({ text }: TProps) {
  return (
    <div>
      <img
        src={loadingImg}
        alt="loading"
        width={20}
        style={{ verticalAlign: "middle" }}
      />
      {text}
    </div>
  );
}

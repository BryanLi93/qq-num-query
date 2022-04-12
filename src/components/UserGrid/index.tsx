import Style from "./index.module.sass";

type TProps = {
  user: User;
};

export default function ({ user }: TProps) {
  console.log(user);

  return (
    <div className={Style["user-grid"]}>
      <div className="avatar">
        <img src={user.qlogo} alt="qq头像" />
      </div>
      <div className="info">
        <div className="name">{user.name}</div>
        <div className="qq">{user.qq}</div>
      </div>
    </div>
  );
}

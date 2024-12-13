import { useNavigate } from "react-router";
import { ROUTES } from "../constants";
import { useUserInfoContext } from "../../contexts/userInfo.context";

import styles from "./LoginPage.module.css";

type LoginInfo = {
  name: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const userInfoContext = useUserInfoContext();

  const login = (loginData: LoginInfo) => {
    const { name } = loginData;
    userInfoContext.setName(name);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    login({
      name: (formData.get("name") as string) || "",
    });

    navigate(ROUTES.Chat);
  };

  return (
    <div className={styles.loginPage}>
      <h1>ChitChat</h1>
      <form className={styles.loginForm} onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <button type="submit">Let's Chat</button>
      </form>
    </div>
  );
};

export default LoginPage;

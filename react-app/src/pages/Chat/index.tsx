import { useNavigate } from "react-router";
import MessageContainer from "../../components/MessageContainer";
import TopBar from "../../components/TopBar";
import { useUserInfoContext } from "../../contexts/userInfo.context";

import styles from "./ChatPage.module.css";
import { ROUTES } from "../constants";
import { useEffect } from "react";

const ChatPage = () => {
  const { name } = useUserInfoContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate(ROUTES.Login);
    }
  });

  return (
    <div className={styles.chatPage}>
      <TopBar />
      <MessageContainer />
    </div>
  );
};

export default ChatPage;

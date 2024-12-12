import { useEffect, useRef, useState } from "react";
import MessageBox from "../MessageBox";

import styles from "./MessageContainer.module.css";

interface Message {
  sender?: string;
  content: string;
}

const MessageContainer = () => {
  const [messageInput, setMessageInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const messageLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageLogRef.current) {
      messageLogRef.current.scrollTop = messageLogRef.current?.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    setMessages(() => {
      const newMessages = [...messages, { content: messageInput }];
      return newMessages;
    });
    setMessageInput("");
  };

  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageLogs} ref={messageLogRef}>
        <MessageBox
          sender="Brian"
          content="SUper long input here we go asdasdmad asdiaosdiajdo asdiadsoasj asdad asdadi sia asdidqn asdiadoq adsiaos asdiafkop asdadkkoa asdoaksdk adsoasdkpq asodadkpwp asdokp"
        />
        <MessageBox content="World" />
        {messages.map((message) => {
          const { sender, content } = message;
          return <MessageBox sender={sender} content={content} />;
        })}
      </div>
      <div className={styles.messageController}>
        <input
          className={styles.messageInput}
          type="text"
          onChange={(e) => {
            setMessageInput(e.target.value);
          }}
          value={messageInput}
          onKeyDown={(e) => {
            if (e.key == "Enter" && messageInput) {
              console.log(messageInput);
              sendMessage();
            }
          }}
        />
        <button
          className={styles.sendButton}
          disabled={!messageInput}
          onClick={() => {
            console.log(messageInput);
            sendMessage();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;

import styles from "./MessageBox.module.css";

type MessageBoxProps = {
  content: string;
  sender?: string;
};

const MessageBox = (props: MessageBoxProps) => {
  const { content, sender } = props;
  const boxStyle = sender ? styles.messageBoxLeft : styles.messageBoxRight;

  return (
    <div className={boxStyle}>
      <div>{sender}</div>
      <div className={styles.messageContent}>{content}</div>
    </div>
  );
};

export default MessageBox;

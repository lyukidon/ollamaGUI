import { useSelector } from "react-redux";
import ChatComponent from "../components/chat/Chat";

const Chat = () => {
  const chatData = useSelector((state: any) => state.chat);

  return (
    <div className="flex flex-row w-screen justify-center">
      <ChatComponent chatData={chatData} />
    </div>
  );
}

export default Chat;
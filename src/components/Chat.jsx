import { BsCamera } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CgMoreVerticalO } from "react-icons/cg";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Gavin</span>
        <div className="chatIcons">
          <BsCamera />
          <AiOutlineUserAdd />
          <CgMoreVerticalO />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

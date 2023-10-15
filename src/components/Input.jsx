import { FaImages } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <GrAttachment className="icons" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FaImages className="icons" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;

import nong from "../img/nong.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={nong} alt="Profile" />
        <div className="userChatInfo">
          <span>Gavin</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;

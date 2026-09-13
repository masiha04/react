
import "./usercard.css";

const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="user-name">{props.name}</p>

      <img id="user-img" src={props.image} alt="Masiha" />

      <p id="user-description">
        {props.desc}
      </p>
    </div>
  );
};

export default UserCard;
import React from "react";
import { connect } from "react-redux";
import { updateNewMember, addMember } from "../../actions/dragonListActions";
import DragonMember from "./DragonMember";

const DragonList = (props) => {
  const handleClick = () => {
    const randomNumber = Math.round(Math.random());
    const newMember = {
      name: props.newMember,
      dragonStatus: randomNumber === 0 ? true : false,
    };
    props.addMember(newMember);
  };

  return (
    <div>
      <div className="friends-list">
        {props.members.map((member, idx) => (
          <DragonMember key={idx} member={member} />
        ))}
      </div>
      <input
        type="text"
        value={props.newMember}
        onChange={(e) => props.updateNewMember(e.target.value)}
        placeholder="add new member"
      />
      <button onClick={handleClick}>Add Member</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state.dragonListReducer.members,
    newMember: state.dragonListReducer.newMember,
  };
};

export default connect(mapStateToProps, { updateNewMember, addMember })(
  DragonList
);

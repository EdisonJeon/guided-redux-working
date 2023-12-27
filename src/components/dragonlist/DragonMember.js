import React from "react";

const DragonMember = (props) => {
  console.log(props);
  return (
    <div>
      <h4>
        {props.member.name}{" "}
        {props.member.dragonStatus ? <i className="fas fa-dragon" /> : null}
      </h4>
    </div>
  );
};

export default DragonMember;

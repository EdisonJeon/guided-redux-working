import React from "react";
import { connect } from "react-redux";
import { updateNewTitle, updateTitle } from "../../actions/titleActions";

const TitleForm = (props) => {
  return (
    <div>
      <input
        className="title-input"
        type="text"
        name="newTitleText"
        value={props.newTitle}
        onChange={(e) => props.updateNewTitle(e.target.value)}
      />
      <button onClick={() => props.updateTitle(props.newTitle)}>
        Update Title
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { newTitle: state.titleReducer.newTitle };
};

export default connect(mapStateToProps, { updateNewTitle, updateTitle })(
  TitleForm
);

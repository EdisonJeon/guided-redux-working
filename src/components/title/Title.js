import React from "react";
import { connect } from "react-redux";
import TitleDisplay from "../title/TitleDisplay";
import TitleForm from "../title/TitleForm";

const Title = (props) => {
  return <div>{!props.editing ? <TitleDisplay /> : <TitleForm />}</div>;
};

const mapStateToProps = (state) => {
  return {
    editing: state.titleReducer.editing,
  };
};

export default connect(mapStateToProps, {})(Title);

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleEditing, updateTitle } from '../actions/titleActions';

// Step 2
// connect the component to the redux store using "connect"
// 2a - build a mSTP function to pass into connect

const Title = props => {
  console.log(props);
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{' '}
          <i className="far fa-edit" onClick={props.toggleEditing} />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => props.updateTitle(newTitleText)}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    editing: state.titleReducer.editing,
    title: state.titleReducer.title
  };
};

// const mapStateToProps = ({ editing, title }) => ({
//   editing,
//   title
// });

// connect is a "higher order component (HOC)"
export default connect(
  mapStateToProps,
  { toggleEditing, updateTitle } // black magic part 🧙‍♂️
)(Title); // function currying

// connect is a function that gets called twice!
// The first call:
// takes two arguments
// 1- a function (mapStateToProps) - this maps our redux state to the props of the component we are connecting

// 2- an object of action creators - this wraps each action creator inside dispatch, and then adds the AC to the props of the component we are connecting

// The second call takes the component you wish to connect as an argument

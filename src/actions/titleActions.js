// Step 3 - Action Creators
// function that returns an action object
// under-the-hood, Redux will take that action object that was returned, and dispatch it to the reducer

export function toggleEditing() {
    return { type: 'TOGGLE_EDITING' };
}

export const updateTitle = newTitle => {
    return { type: 'UPDATE_TITLE', payload: newTitle };
};
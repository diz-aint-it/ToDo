export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (id, updatedDescription) => ({
  type: EDIT_TASK,
  payload: { id, updatedDescription },
});

import * as types from '../constants/actionTypes';

export const newCardActionCreator = () => ({
  type: types.NEW_CARD,
});

export const newColumnActionCreator = () => ({
  type: types.NEW_COLUMN,
});

// changed payload below to reflect user input for question

export const submitInfoActionCreator = (question) => ({
  type: types.SUBMIT_INFO,
  payload: {
    question,
  },
});

export const populateDomActionCreator = (array) => ({
  type: types.POPULATE_DOM,
  payload: array,
});

// export const editInfoActionCreator = () => ({
//   type: types.EDIT_INFO,
// });

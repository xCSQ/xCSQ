import * as types from '../constants/actionTypes';

export const newCardActionCreator = () => ({
  type: types.NEW_CARD,
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

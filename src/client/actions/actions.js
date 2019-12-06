import * as types from '../constants/actionTypes';

export const newCardActionCreator = () => ({
  type: types.NEW_CARD,
});

export const newColumnActionCreator = (company) => ({
  type: types.NEW_COLUMN,
  payload: company
});

export const getCompaniesQuestions = (companyQuestionObject) => ({
  type: types.SET_COMPANIES_QUESTIONS,
  payload: companyQuestionObject
})
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

export const initializeColumns = (company) => ({
  type: types.INITIAL_COLUMNS,
  payload: company
});

// export const editInfoActionCreator = () => ({
//   type: types.EDIT_INFO,
// });

import * as types from '../constants/actionTypes';

const fetch = require('node-fetch');

const initialState = {
  question: [],
  newCard: false,
  columns: ['Common Questions'],
  companies: {},
};

// jobCardsReducer is now questionCardsReducer

const questionCardsReducer = (state = initialState, action) => {
  let submittedCard;
  const stateCopy = { ...state };
  switch (action.type) {
    case types.POPULATE_DOM:
      stateCopy.question = action.payload;

      return {
        ...state,
        question: stateCopy.question,
      };
    case types.NEW_CARD:
      stateCopy.newCard = true;
      return {
        ...state,
        newCard: stateCopy.newCard,
      };
    case types.SUBMIT_INFO:
      submittedCard = {
        // removed company and swaped for question
        question: action.payload.question,
        editable: false,
      };
      stateCopy.question.unshift(submittedCard);
      stateCopy.newCard = false;

      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedCard),
      })
        .catch((err) => {
          if (err) new Error();
        });

      return {
        ...state,
        newCard: stateCopy.newCard,
        question: stateCopy.question,
      };


    default:
      return state;
  }
};

export default questionCardsReducer;

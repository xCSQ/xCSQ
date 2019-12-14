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
        // editable: false,
      };
      stateCopy.question.unshift(action.payload.question);
      //stateCopy.question.unshift(submittedCard);
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

      case types.NEW_COLUMN:
        let newState = {...state};
        newState.columns.push(action.payload);
        newState.companies[action.payload] =[];

      fetch('/data/company/'+action.payload)
        .catch((err) => {
          if (err) new Error();
        });
      return {...state, 
               columns:newState.columns, 
               companies:newState.companies 
              };

        case types.INITIAL_COLUMNS:
        let newState2 = {...state};
        newState2.columns.push(action.payload);
        newState2.companies[action.payload] =[];
              
      return {...state, 
               columns:newState2.columns, 
               companies:newState2.companies 
              };
      case types.SET_COMPANIES_QUESTIONS:
          stateCopy.companies = action.payload
          return {...state, companies:stateCopy.companies};
        

    default:
      return state;
  }
};

export default questionCardsReducer;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.jsx';
import * as actions from '../actions/actions';
import Droppable from './dnd/Droppable';

// switched interested to question
const mapStateToProps = (state) => ({
  newCard: state.jobCards.newCard,
  question: state.jobCards.question,
});

// GIVE CARD ABILITY TO SUBMIT ITSELF
// switched role and link out for question from dispatch
// removed company from dispatch

const mapDispatchToProps = (dispatch) => ({
  dispatchSubmitInfo: (question) => dispatch(actions.submitInfoActionCreator(question)),
});

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const relevantCards = [];
    // ID IS COLUMN NAME, COLUMN NAME WITHIN PROPS IS ASSOCIATED WITH THE ARRAY OF CARD OBJECTS
    const arrayInState = this.props[this.props.id];
    // ARRAYINSTATE = ARRAY OF CARDS

    for (let i = 0; i < arrayInState.length; i += 1) {
      console.log(`Array is state is ${arrayInState[i]}`);
      relevantCards.push(<Card input={arrayInState[i]} inArray key={`arrayCard${i}`} />);
      // console.log(`job object ${relevantCards[i].jobObject}`);
    }
    return (
      <Droppable>
        <div
          id="column"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // justifyContent: 'center',
            margin: '10px',
            border: '5px solid #802864',
            width: '200px',
            minHeight: '400px',
            paddingBottom: '15px',
            borderRadius: '5px',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>
            {this.props.column}
          </h2>
          <Card newCard={this.props.newCard} dispatchSubmitInfo={this.props.dispatchSubmitInfo} columnID={this.props.id} />
          <div style={{ }}>
            { relevantCards }
          </div>

        </div>
      </Droppable>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);

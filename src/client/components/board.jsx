import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column.jsx';
import AddCardButton from './addCardButton';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatchNewCard: () => dispatch(actions.newCardActionCreator()),
  dispatchNewColumn: () => dispatch(actions.newColumnActionCreator()),
});

const mapStateToProps = (state) => ({
  question: state.jobCards.question,
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TESTING REPO
    };
  }

  render() {
    const columnHeaders = ['Common Questions'];
    const stateProperties = ['question'];
    const displayColumn = [];
    for (let i = 0; i < columnHeaders.length; i += 1) {
      displayColumn.push(<Column id={`${stateProperties[i]}`} column={`${columnHeaders[i]}`} key={`${columnHeaders[i]}`} />);
    }
    return (
      <div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', justifyItems: 'center', marginTop: '50px',
        }}
        >
          <AddCardButton dispatchNewCard={this.props.dispatchNewCard} />
        </div>
        <div
          id="board"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            alignItems: 'start',
            justifyItems: 'center',
            paddingBottom: '10px',
          }}
        >
          {displayColumn}
          <button
            type="button"
            style={{
              fontWeight: 'bold', fontSize: '16px', width: '100px', borderRadius: '4px', backgroundColor: '#FBC638', color: '',
            }}
            onClick={() => this.props.dispatchNewColumn()}
          >
          add comp
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

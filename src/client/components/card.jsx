import React, { Component } from 'react';
import { submitInfoActionCreator } from '../actions/actions';
import Draggable from './dnd/Draggable';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // changed values of input fields on cards
  // removed link
  // switched role to question
  // changed columns id
  // deleted company

  render() {
    const style = {
      backgroundColor: 'blue',
    };

    if (this.props.newCard && this.props.columnID === 'question') {
      return (

        <div id="card">
          <form
            action="Create Card"
            style={{
              // color: 'blue',
              // margin: '10px',
              width: '140px',
              height: '80px',
              border: '5px light black',
              borderStyle: 'groove',
              textAlign: 'center',
            }}
          >
            <input id="question" type="text" placeholder="Question" />
            <br />
            <button
              type="button"
              onClick={() => this.props.dispatchSubmitInfo(
                document.getElementById('question').value,
              )}
            >
Add Question

            </button>
          </form>
        </div>
      );
    } if (this.props.inArray) {
      // console.log(`***************************${this.props.inArray}`)
      return (
        <Draggable style={{ marginLeft: 'auto', marginRight: 'auto' }} id={this.props.id}>
          <div
            style={{
            // color: 'blue',
            // margin: '10px',
              width: '140px',
              height: 'auto',
              border: '5px light black',
              borderRadius: '10px',
              borderStyle: 'groove',
              textAlign: 'center',
              margin: '5px',
              padding: '5px',
            }}

            className="hard card"
          >
            <label>Question: </label>
            <span>{this.props.input}</span>
          </div>
        </Draggable>
      );
    }
    return null;
  }
}

export default Card;

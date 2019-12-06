import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column.jsx';
import AddCardButton from './addCardButton';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatchNewCard: () => dispatch(actions.newCardActionCreator()),
  dispatchNewColumn: (company) => dispatch(actions.newColumnActionCreator(company)),

  dispatchGetColumns: (company) => dispatch(actions.initializeColumns(company)),
});

const mapStateToProps = (state) => ({
  question: state.jobCards.question,
  columns: state.jobCards.columns,
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
    change:false,
    };
    this.addCompany = this.addCompany.bind(this)
  }
  componentDidMount(){
    fetch('/data/names').then(data => data.json()).then(result =>
      { for(let i=0; i<result.length; i++)
        this.props.dispatchGetColumns(result[i])
        this.setState({change:false})
      })

  }
  addCompany(){
    let companyName= document.querySelector('#newComp').value.toUpperCase()
    this.props.dispatchNewColumn(companyName)
    this.setState({change:true})
  }

  render() {
    // const columnHeaders = ['Common Questions'];
    const stateProperties = ['question'];
    stateProperties.push(...this.props.columns.slice(1));
    const displayColumn = [];

    console.log('this.props.columns:', this.props.columns)

    for (let i = 0; i < this.props.columns.length; i += 1) {
      console.log('column name:', this.props.columns[i])
      displayColumn.push(<Column id={`${stateProperties[i]}`} columnName={`${this.props.columns[i]}`} key={`${this.props.columns[i]}`} />);
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
          <div>
          <input style={{margin:'5px'}} id="newComp"></input>
          <button
            type="button"
            style={{
              fontWeight: 'bold', fontSize: '16px', width: '100px', borderRadius: '4px', backgroundColor: '#FBC638', color: '', marginLeft: '15px'
            }}
            onClick={() => this.addCompany()}
          >
          add company
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

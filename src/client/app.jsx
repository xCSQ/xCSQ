import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/board.jsx';
import * as actions from './actions/actions';

const mapDispatchToProps = (dispatch) => ({
  populateDom: (array) => (dispatch(actions.populateDomActionCreator(array))),
});
const mapStateToProps = (state) => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/data')
      .then((data) => data.json())
      .then((result) => {
        const resultsArray = result.map((questionObject) => questionObject.questions);
        this.props.populateDom(resultsArray);
      });
  }

  render() {
    return (
      <div id="board" style={{ fontFamily: 'Nunito' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
        }}
        >
          <img src="https://s.yimg.com/ny/api/res/1.2/018oi5u9bdiI8oOlTsQjNw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-12/50e43df0-160e-11ea-abfb-33475d56001d" alt="logo" style={{ height: '50px' }} />
          <h2 style={{ margin: '0px 0px 0px 20px', fontSize: '34px' }}>
            CSQ
            <span style={{ marginLeft: '10px', fontSize: '20px' }}> a study guide for common interview questions</span>
          </h2>
        </div>
        <hr style={{ marginTop: '10px', width: '500px', marginInlineStart: '85px' }} />
        <Board />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

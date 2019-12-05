import React, { Component } from 'react';
import { isAbsolute } from 'path';

const AddCardButton = (props) => (
  <button
    style={{
      fontWeight: 'bold', fontSize: '16px', width: '100px', borderRadius: '4px', backgroundColor: '#FBC638', color: '',
    }}
    type="submit"
    onClick={() => (props.dispatchNewCard())}
  >
    {' '}
hit me
    {' '}

  </button>
);

// const addCompanyColumnButton = (props) => (
//   <button
//     style={{
//       fontWeight: 'bold', fontSize: '16px', width: '100px', borderRadius: '4px', backgroundColor: '#FBC638', color: '', display: isAbsolute,
//     }}
//     type="submit"
//     onClick={() => (props.dispatchNewColumn())}
//   >
//     {' '}
// add comp
//     {' '}

//   </button>
// );

export default AddCardButton;

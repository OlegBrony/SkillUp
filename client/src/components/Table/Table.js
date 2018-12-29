import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Table.scss';


function Table({ matrix }) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i] = matrix[i][j]
    }
  }
  console.log(arr)

  return (
    <div className={styles.main}>
      <Link to='/'>
        <div className={styles.back}>Back to form</div>
      </Link>
      <table>
        {matrix.map((row, index) =>
          <tr key={index}>{row.map((item, index) => <td key={index}>{item}</td>)}
            <td className={styles.sum}>{row.reduce((a, b) => a + b, 0)}</td>
          </tr>)}
        <tr className={styles.sum}>{arr.reduce((a, b) => console.log(a + b), 0)}</tr>
      </table>
    </div>
  )
}

export default Table;


import React, { Component } from 'react';
import { Header, NavBar, NewsLine, Describer, Slider } from '../';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

class Home extends Component {
  state = {
    m: '',
    n: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleTable = () => {
    const { writeTableMatrix } = this.props;
    const
      M = this.state.m,
      N = this.state.n,
      X = 10;
    let matrix = [];
    for (let i = 0; i < M; i++) {
      let str = [];
      for (let j = 0; j < N; j++) {
        let item = {
          id: `${i}-${j}`,
          am: Math.floor(100 + Math.random() * (999 + 1 - 100))
        }
        str.push(item['am']);
      }
      matrix.push(str);
    }
    writeTableMatrix(matrix)
  }

  render() {
    const { m, n } = this.state;
    return (
      <main>
        <div className={styles.form}>
          <div className={styles.title}>Введіть число стрічок та стовпців</div>
          <div className={styles.container}>
            <input value={m} onChange={this.handleInput} id='m' type='number' placeholder='M' min='1' ></input>
            <input value={n} onChange={this.handleInput} id='n' type='number' placeholder='N' min='1'></input>
            {m && n ?
              <Link to='/table'><button onClick={this.handleTable}>Побудувати таблицю</button></Link> : null}
          </div>
        </div>
      </main>
    )
  }
}

export default Home


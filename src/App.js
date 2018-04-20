import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Counter(props) {
  return <p className="App-intro">Count, {props.count}</p>;
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

class App extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.count % 3);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  resetTimer = () => {
    this.setState({
      count: 0
    })
  };

  render() {
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello, {formatName(user)}!
        </p>
        <Counter count={this.state.count}/>
        <p className="App-intro">
          <button onClick={this.resetTimer}>Rest</button>
        </p>
      </div>
    );
  }
}

export default App;

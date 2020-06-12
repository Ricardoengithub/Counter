import React from 'react';
import './App.css';

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {
      value: 0
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)
  }

  increase(){
    this.setState({
      value: this.state.value + 1
    })
  }

  decrease(){
    this.setState({
      value: this.state.value - 1
    })
  }

  reset(){
    this.setState({
      value: 0
    })
  }

  render(){
    return(
      <div className="App">
        <div id="container">
          <h1>Counter</h1>
          <h2>{this.state.value}</h2>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrease}>Decrease</button>
        </div>
      </div>
    )
  }
}

export default App;

import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    showClock: false,
  }

  onToggleClock = () => {
    // const {showClock} = this.state
    this.setState(prevState => ({
      showClock: !prevState.showClock,
    }))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.onToggleClock}
          type="button"
          className="toggle-button"
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {/* clock display Login * */}
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App

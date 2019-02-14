const Header = () => (
  <header>
    <h1>Pomodoro Clock</h1>
    <p> ~ Find your focus</p>
  </header>
);

const Footer = () => (
  <footer>
    <div className="copy">
      <p>
        &copy;2019 Made by&nbsp;
        <a href="https://github.com/mhoumann87" target="_blank">
          Michael Houmann
        </a>
      </p>
    </div>
    <div className="social">
      <a href="https://twitter.com/MichaelHoumann" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://github.com/mhoumann87" target="_blank">
        <i className="fab fa-github" />
      </a>
      <a href="www.linkedin.com/in/michael-houmann-3b03654b" target="_blank">
        <i className="fab fa-linkedin" />
      </a>
    </div>
  </footer>
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25,
      pause: false,
      sessionStart: false
    };
  } // constructor

  increaseBreak = () => {
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  };

  decreaseBreak = () => {
    if (this.state.breakLength > 0) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  };

  increaseSession = () => {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1
      });
    }
  };

  decreaseSession = () => {
    if (this.state.sessionLength > 0) {
      this.setState({
        sessionLength: this.state.sessionLength - 1
      });
    }
  };

  timer = () => {};

  render() {
    return (
      <main>
        <div className="clock-box">
          <div className="set-length break card" id="break-label">
            <h2>Set Break Length</h2>
            <div className="timer">
              <div className="time">
                <div className="time-box">
                  <div id="break-length">{this.state.breakLength}</div>
                  <div>sec</div>
                </div>
              </div>
              <div className="button-box">
                <button
                  className="btn"
                  id="break-increment"
                  onClick={this.increaseBreak}
                >
                  <i className="fas fa-arrow-circle-up" />
                </button>
                <button
                  className="btn"
                  id="break-decrement"
                  onClick={this.decreaseBreak}
                >
                  <i className="fas fa-arrow-circle-down" />
                </button>
              </div>
            </div>
          </div>

          <div className="set-length session card" id="session-label">
            <h2>Set Session Length</h2>
            <div className="timer">
              <div className="time">
                <div className="time-box">
                  <div id="session-length">{this.state.sessionLength}</div>
                  <div>min</div>
                </div>
              </div>
              <div className="button-box">
                <button
                  className="btn"
                  id="session-increment"
                  onClick={this.increaseSession}
                >
                  <i className="fas fa-arrow-circle-up" />
                </button>
                <button
                  className="btn"
                  id="session-decrement"
                  onClick={this.decreaseSession}
                >
                  <i className="fas fa-arrow-circle-down" />
                </button>
              </div>
            </div>
          </div>

          <div className="session-box card" id="timer-label">
            <h2>Session</h2>
            <div className="time-left" id="time-left">
              {this.state.sessionLength}
            </div>
            <div className="session-btn">
              <button className="btn start_stop" id="start_stop">
                <i className="fas fa-play" />
                <i className="fas fa-stop" />
              </button>
              <button className="btn reset" id="reset">
                <i className="fas fa-redo" />
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  } // render
} // Clock

const App = () => (
  <div>
    <Header />
    <Clock />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

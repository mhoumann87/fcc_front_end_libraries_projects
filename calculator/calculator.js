const Header = () => (
  <header>
    <h1>React Calculator</h1>
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
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: [],
      reverse: false,
      prevOperator: null,
      inputValue: 0,
      subTotal: 0
    };
    this.inputNum = this.inputNum.bind(this);
  }

  inputNum(e) {
    console.log(e.target.value);
    /* this.setState({
      inputValue: props
    }); */
  }

  render() {
    return (
      <main>
        <div className="calc-body">
          {/*  My calculator should contain an element to display values
             with a corresponding id="display". */}
          <div className="display" id="display">
            {this.state.inputValue}
          </div>

          <div className="keyboard">
            <div className="btn func" id="clear">
              C
            </div>
            <div className="btn" id="clear-screen">
              CE
            </div>
            <div className="btn" id="reverse">
              +/-
            </div>
            <div className="btn func" id="divide">
              <i className="fas fa-divide" />
            </div>
            <div className="btn" id="one" value="1" onClick={this.inputNum}>
              1
            </div>
            <div className="btn" id="two">
              2
            </div>
            <div className="btn" id="three">
              3
            </div>
            <div className="btn func" id="multiply">
              <i className="fas fa-times" />
            </div>
            <div className="btn" id="four">
              4
            </div>
            <div className="btn" id="five">
              5
            </div>
            <div className="btn" id="six">
              6
            </div>
            <div className="btn func" id="subtract">
              <i className="fas fa-minus" />
            </div>
            <div className="btn" id="seven">
              7
            </div>
            <div className="btn" id="eight">
              8
            </div>
            <div className="btn" id="nine">
              9
            </div>
            <div className="btn func" id="add">
              <i className="fas fa-plus" />
            </div>
            <div className="btn" id="zero">
              0
            </div>
            <div className="btn dot" id="decimal">
              <i className="fas fa-circle" />
            </div>
            <div className="btn func equals" id="equals">
              <i className="fas fa-equals" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Calculator />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

/**
 * At any time, pressing the clear button clears the input and output values,
 * and returns the calculator to its initialized state; 0 should be shown in
 * the element with the id of display.
 */
/**
 * As I input numbers, I should be able to see my input in the
 * element with the id of display.
 */
/**
 * In any order, I should be able to add, subtract, multiply and divide
 * a chain of numbers of any length, and when I hit =, the correct
 * result should be shown in the element with the id of display.
 */
/**
 * When inputting numbers, my calculator should not allow
 * a number to begin with multiple zeros.
 */
/**
 * When the decimal element is clicked, a . should append to the currently
 * displayed value; two . in one number should not be accepted.
 */
/**
 * I should be able to perform any
 * operation (+, -, *, /) on numbers containing decimal points.
 */
/**
 * If 2 or more operators are entered consecutively,
 * the operation performed should be the last operator entered.
 */
/**
 * Pressing an operator immediately following = should start a new
 * calculation that operates on the result of the previous evaluation.
 */
/**
 * My calculator should have several decimal places of precision when it
 * comes to rounding (note that there is no exact standard, but you should be
 *  able to handle calculations like 2 / 7 with reasonable precision to at
 * least 4 decimal places).
 */
/** */

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
          {/* My calculator should contain 10 clickable elements containing
          one number * each from 0-9, with the following corresponding IDs:
          id="zero", id="one", * id="two", id="three", id="four", id="five",
          id="six", id="seven", id="eight", * and id="nine".
          My calculator should contain a clickable element containing 
          an = (equal sign) with a corresponding id="equals".
          My calculator should contain 4 clickable elements each containing one of the
          4 primary mathematical operators with the following corresponding
          IDs: id="add", id="subtract", id="multiply", id="divide".
          My calculator should contain a clickable element with an id="clear".
          My calculator should contain a clickable element containing
          a . (decimal point) symbol with a corresponding id="decimal".
          */}
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

/**
 * This calculator in react are made for the front end libraries certicicate on
 * www.freecodecamp.org.
 * Made by Michael Houmann 2019
 */

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
      showInput: "0",
      subTotal: 0,
      prevOperator: "",
      digit: false
    };

    this.clear = this.clear.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.reverse = this.reverse.bind(this);
    this.setDigit = this.setDigit.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
  }

  clear() {
    this.setState({
      showInput: "0",
      subTotal: 0,
      prevOperator: "",
      digit: false
    });
  }
  clearScreen() {
    this.setState({
      showInput: "0"
    });
  }
  reverse() {
    let reverseNum = parseFloat(this.state.showInput) * -1;
    this.setState({
      showInput: reverseNum.toString()
    });
  }
  setDigit() {
    console.log("digit");
    if (this.state.digit) {
      return;
    } else {
      this.setState({
        digit: true,
        showInput: this.state.showInput + "."
      });
    }
  }
  handleNumbers(e) {
    e.persist();
    if (this.state.showInput === "0") {
      this.state.showInput = "";
      this.setState({
        showInput: this.state.showInput + e.target.attributes[2].value
      });
    } else if (parseFloat(this.state.showInput) === this.state.subTotal) {
      this.state.showInput = "";
      this.setState({
        showInput: this.state.showInput + e.target.attributes[2].value
      });
    } else {
      this.setState({
        showInput: this.state.showInput + e.target.attributes[2].value
      });
    }
  }
  handleOperators(e) {
    e.persist();
    let clicked = "";
    if (e.target.classList[0] === "fas") {
      clicked = e.target.parentElement.attributes[2].value;
    } else {
      clicked = e.target.attributes[2].value;
    }
    if (this.state.showInput === "0" || this.state.showInput === "") {
      return;
    } else if (this.state.prevOperator === "" && this.state.subTotal == 0) {
      this.setState({
        subTotal: parseFloat(this.state.showInput),
        prevOperator: clicked
      });
    } else if (this.state.prevOperator === "" && this.state.subTotal !== 0) {
      this.setState({
        showInput: "error"
      });
    } else if (this.state.prevOperator === "=") {
      this.setState({
        prevOperator: clicked
      });
    } else {
      this.operate(parseFloat(this.state.showInput), this.state.prevOperator);
      this.setState({
        prevOperator: clicked
      });
    }
  }
  operate(value, opr) {
    switch (opr) {
      case "+":
        let addValue = this.state.subTotal + value;
        this.setState({
          subTotal: addValue,
          showInput: addValue.toString()
        });
        break;
      case "-":
        let subValue = this.state.subTotal - value;
        this.setState({
          subTotal: subValue,
          showInput: subValue.toString()
        });
        break;
      case "*":
        let mulValue = this.state.subTotal * value;
        this.setState({
          subTotal: mulValue,
          showInput: mulValue.toString()
        });
        break;
      case "/":
        if (this.state.subTotal === 0 || value === 0) {
          this.setState({
            showInput: "error"
          });
          break;
        }
        let divValue = this.state.subTotal / value;
        this.setState({
          subTotal: divValue,
          showInput: divValue.toString()
        });
        break;
      case "=":
        let res = this.state.subTotal;
        this.setState({
          showInput: res,
          subTotal: res,
          prevOperator: "="
        });
        break;
    }
  }

  render() {
    return (
      <main>
        <div className="calc-body">
          {/*  My calculator should contain an element to display values
             with a corresponding id="display". */}
          <div className="display" id="display">
            {this.state.showInput}
          </div>
          <Keyboard
            clear={this.clear}
            clearScreen={this.clearScreen}
            reverse={this.reverse}
            digit={this.setDigit}
            numbers={this.handleNumbers}
            operator={this.handleOperators}
          />
        </div>
      </main>
    );
  }
}

class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <div
          className="btn func"
          id="clear"
          value="C"
          onClick={this.props.clear}
        >
          C
        </div>
        <div
          className="btn"
          id="clear-screen"
          value="CE"
          onClick={this.props.clearScreen}
        >
          CE
        </div>
        <div
          className="btn"
          id="reverse"
          value="+/-"
          onClick={this.props.reverse}
        >
          +/-
        </div>
        <div
          className="btn func"
          id="divide"
          value="/"
          onClick={this.props.operator}
        >
          <i className="fas fa-divide" />
        </div>
        <div className="btn" id="one" value="1" onClick={this.props.numbers}>
          1
        </div>
        <div className="btn" id="two" value="2" onClick={this.props.numbers}>
          2
        </div>
        <div className="btn" id="three" value="3" onClick={this.props.numbers}>
          3
        </div>
        <div
          className="btn func"
          id="multiply"
          value="*"
          onClick={this.props.operator}
        >
          <i className="fas fa-times" />
        </div>
        <div className="btn" id="four" value="4" onClick={this.props.numbers}>
          4
        </div>
        <div className="btn" id="five" value="5" onClick={this.props.numbers}>
          5
        </div>
        <div className="btn" id="six" value="6" onClick={this.props.numbers}>
          6
        </div>
        <div
          className="btn func"
          id="subtract"
          value="-"
          onClick={this.props.operator}
        >
          <i className="fas fa-minus" />
        </div>
        <div className="btn" id="seven" value="7" onClick={this.props.numbers}>
          7
        </div>
        <div className="btn" id="eight" value="8" onClick={this.props.numbers}>
          8
        </div>
        <div className="btn" id="nine" value="9" onClick={this.props.numbers}>
          9
        </div>
        <div
          className="btn func"
          id="add"
          value="+"
          onClick={this.props.operator}
        >
          <i className="fas fa-plus" />
        </div>
        <div className="btn" id="zero" value="0" onClick={this.props.numbers}>
          0
        </div>
        <div
          className="btn dot"
          id="decimal"
          value="."
          onClick={this.props.digit}
        >
          <i className="fas fa-circle" />
        </div>
        <div
          className="btn func equals"
          id="equals"
          value="="
          onClick={this.props.operator}
        >
          <i className="fas fa-equals" />
        </div>
      </div>
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

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
      showInput: "0",
      subTotal: 0,
      prevOperator: "",
      digit: false,
      last_clicked: ""
    };
  } // constructor

  handleNumbers = event => {
    event.persist();
    let currNum = event.target.attributes[2].value;

    this.setState({
      last_clicked: currNum
    });

    if (this.state.showInput === "0") {
      this.state.showInput = "";
      this.setState({
        showInput: this.state.showInput + currNum
      });
    } else if (this.state.digit) {
      this.setState({
        showInput: this.state.showInput + currNum
      });
    } else if (
      parseFloat(this.state.showInput) === this.state.subTotal ||
      (this.state.digit &&
        parseFloat(this.state.showInput) === this.state.subTotal)
    ) {
      this.state.showInput = "";
      this.setState({
        showInput: this.state.showInput + currNum
      });
    } else {
      this.setState({
        showInput: this.state.showInput + currNum
      });
    }
  }; // handleNumbers

  handleOperators = event => {
    event.persist();

    const operators = "+-*/=";
    const prevInput = this.state.showInput;
    let currOpr = "";

    if (event.target.classList[0] === "fas") {
      currOpr = event.target.parentElement.attributes[2].value;
    } else {
      currOpr = event.target.attributes[2].value;
    }

    if (operators.indexOf(this.state.last_clicked) < 0) {
      console.log("first");
      this.setState({
        last_clicked: currOpr
      });
    } else {
      console.log("more", this.state.last_clicked);
      this.setState({
        showInput: prevInput,
        prevOperator: currOpr,
        last_clicked: currOpr
      });
      return;
    }

    if (this.state.showInput === "0" || this.state.showInput === "") {
      return;
    } else if (this.state.prevOperator === "" && this.state.subTotal === 0) {
      this.setState({
        prevOperator: currOpr,
        subTotal: parseFloat(this.state.showInput),
        last_clicked: "",
        digit: false
      });
    } else if (this.state.prevOperator === "" && this.state.subTotal !== 0) {
      this.setState({
        showInput: "error"
      });
    } else if (this.state.prevOperator === "=") {
      this.setState({
        prevOperator: currOpr,
        digit: false
      });
    } else {
      this.operate(parseFloat(this.state.showInput), this.state.prevOperator);
      console.log(this.state.prevOperator);
      this.setState({
        prevOperator: currOpr,
        last_clicked: "",
        digit: false
      });
    }
  }; // handleOperators

  operate = (sum, opr) => {
    switch (opr) {
      case "+":
        let addValue = this.state.subTotal + sum;
        this.setState({
          subTotal: addValue,
          showInput: addValue.toString()
        });
        break;
      case "-":
        let subValue = this.state.subTotal - sum;
        this.setState({
          subTotal: subValue,
          showInput: subValue.toString()
        });
        break;
      case "*":
        let multpValue = this.state.subTotal * sum;
        this.setState({
          subTotal: multpValue,
          showInput: multpValue.toString()
        });
        break;
      case "/":
        if (this.state.subTotal === 0 || sum === 0) {
          this.setState({
            showInput: "error"
          });
          break;
        } else {
          let divValue = this.state.subTotal / sum;
          this.setState({
            subTotal: divValue,
            showInput: divValue.toString()
          });
          break;
        }
      case "=":
        let value = this.setState.subTotal;
        this.setState({
          showInput: parseFloat(value),
          prevOperator: "="
        });
        break;
    } // switch
  };

  clear = () => {
    this.setState({
      showInput: "0",
      subTotal: 0,
      prevOperator: "",
      digit: false,
      last_clicked: ""
    });
  };

  clearScreen = () => {
    this.setState({
      showInput: "0"
    });
  };

  setDigit = () => {
    console.log(this.state.digit);
    if (this.state.digit) {
      return;
    } else {
      this.setState({
        showInput: this.state.showInput + ".",
        digit: true
      });
    }
  };

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
  } // render()
} // Calculator

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
          .
        </div>
        <div
          className="btn func equals"
          id="equals"
          value="="
          onClick={this.props.operator}
        >
          =
        </div>
      </div>
    );
  } // render
} // Keyboard

const App = () => (
  <div>
    <Header />
    <Calculator />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

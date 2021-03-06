//

//
//
// api for random quotes https://talaikis.com/api/quotes/random/

const Header = () => (
  <header>
    <h1>Random Quote Machine</h1>
  </header>
);

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: "",
      author: "",
      proxy: "https://cors-anywhere.herokuapp.com/",
      API:
        "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
    };

    this.getQuote = this.getQuote.bind(this);
  }

  /* On first load, the page shows a random quote with an author */
  componentWillMount() {
    fetch(`${this.state.proxy}${this.state.API}`)
      .then(result => result.json())
      .then(data => {
        let stripHtml = data[0].content.replace(/<(?:.|\n)*?>/gm, "");
        this.setState({
          randomQuote: stripHtml,
          author: data[0].title
        });
      })
      .catch(error => console.error(error));
  }

  /* When the new-quote button is clicked a new quote will be fetched 
  and displayed along side author info */
  getQuote() {
    fetch(`${this.state.proxy}${this.state.API}`)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        let stripHtml = data[0].content.replace(/<(?:.|\n)*?>/gm, "");
        this.setState({
          randomQuote: stripHtml,
          author: data[0].title
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    let url = encodeURIComponent(
      `"${this.state.randomQuote}" from  ${this.state.author}`
    );
    return (
      // A wrapper container with the id "quote-box"
      <div id="quote-box">
        {/* Inside "#quote-box" is an element id="text" */}
        <div id="text">
          <div className="quote-icon">
            <i class="fas fa-quote-right" />
          </div>
          <blockquote>{this.state.randomQuote}</blockquote>
          <div className="quote-icon">
            <i class="fas fa-quote-left" />
          </div>
        </div>
        <div id="author-box">
          {/* Inside "#quote-box" is an element id="author" */}
          <em id="author">Author: {this.state.author}</em>
          {/* inside "#quote-box" is a clickeable element with an id="tweet-quote" */}
          <a
            id="tweet-quote"
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              url
            }
            target="_blank"
          >
            <i class="fab fa-twitter" />
            &nbsp;Tweet this Quote
          </a>
        </div>

        {/* Inside "#quote-box" is a button id="new-quote" */}
        <button id="new-quote" onClick={this.getQuote}>
          Get Random Quote
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Quote />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-container"));

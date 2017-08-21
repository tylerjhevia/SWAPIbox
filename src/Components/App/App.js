import React, { Component } from "react";
import "./App.css";
import CardDisplay from "../CardDisplay/CardDisplay";
import Controls from "../Controls/Controls";
import LoadingPage from "../LoadingPage/LoadingPage";
import Background from "../Background/Background";
import Helper from "../Helper/Helper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      favoriteCards: []
    };
    this.getApi = this.getApi.bind(this);
    // const movie = getMovieText();
  }

  componentDidMount() {
    this.setState({
      data: this.cleanApi()
    });
  }

  getApi(callType) {
    const lowerCallType = callType.toLowerCase();
    if (callType !== "Favorite") {
      fetch(`https://swapi.co/api/${lowerCallType}/`)
        .then(data => data.json())
        .then(data => {
          this.cleanApi(data.results);
        })
        .catch(console.log("oops"));
    }
  }

  cleanApi(dataArray) {
    console.log(dataArray);
    this.setState({
      data: dataArray
    });
  }

  render() {
    return (
      <div>
        <Controls apiCall={this.getApi} />
        <CardDisplay itemData={this.state.data} />
      </div>
    );
  }
}

export default App;

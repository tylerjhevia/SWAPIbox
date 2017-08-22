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
      favoriteCards: [],
      favClicked: false
    };
    this.getApi = this.getApi.bind(this);
    this.favoriteCard = this.favoriteCard.bind(this);
    this.toggleFav = this.showFavorites.bind(this);
    // const movie = getMovieText();
  }

  componentDidMount() {
    this.setState({
      data: this.cleanApi()
    });
  }

  getApi(callType) {
    const lowerCallType = callType.toLowerCase();
    fetch(`https://swapi.co/api/${lowerCallType}/`)
      .then(data => data.json())
      .then(data => {
        // if people api call then go into data and make homeworld api call in a .then
        this.cleanApi(data.results);
      })
      // .then(this.cleanApi(ourdatahere))
      .catch(console.log("error"));
  }

  cleanApi(dataArray) {
    console.log(dataArray);
    this.setState({
      data: dataArray
    });
  }

  favoriteCard(card) {
    console.log(card);

    const favorites = this.state.favoriteCards;
    favorites.push(card);
    this.setState({
      favoriteCards: favorites
    });
  }

  showFavorites() {
    this.setState({
      favClicked: !this.state.favClicked
    });
  }

  render() {
    return (
      <div>
        <Background />
        <Controls apiCall={this.getApi} toggleFav={this.toggleFav} />
        <CardDisplay
          itemData={this.state.data}
          favorites={this.favoriteCard}
          favClicked={this.state.favClicked}
          favCards={this.state.favoriteCards}
        />
      </div>
    );
  }
}

export default App;

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
        if (lowerCallType === "people") {
          this.fetchOtherData(data.results);
        }

        if (lowerCallType === "planets") {
          this.fetchOtherData(data.results);
        }
      })
      // .then(this.cleanApi(ourdatahere))
      .catch(err => console.log(err));
  }

  cleanApi(dataArray) {
    console.log(dataArray);
    this.setState({
      data: dataArray
    });
  }

  fetchOtherData(data) {
    const originalData = data;
    console.log("other data ", data);
    const otherData = data.map(person => {
      return fetch(person.homeworld).then(res => res.json());
    });

    Promise.all(otherData)
      .then(res => {
        return res.map((planet, i) => {
          console.log("og data", originalData);
          return Object.assign(
            // otherData[i].homeworld = planet.name;
            // otherData[i].population = planet.population;
            // return otherData[i];

            originalData[i],
            { homeworld: planet.name },
            { population: planet.population }
            // {species: planet.species[0]}
          );
        });
      })
      .then(newData => {
        this.setState({
          data: newData
        });
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

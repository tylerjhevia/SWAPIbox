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
    this.clickedCard = this.clickedCard.bind(this);
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
        //change to switch case
        if (lowerCallType === "people") {
          this.fetchOtherData(data.results);
        }

        if (lowerCallType === "planets") {
          this.fetchOtherData(data.results);
        }

        if (lowerCallType === "vehicles") {
          this.cleanApi(data.results);
        }
      })
      // .then(this.cleanApi(ourdatahere))
      .catch(err => console.log("bad"));
  }

  cleanApi(dataArray) {
    this.setState({
      data: dataArray
    });
  }

  getPlanetData(data) {
    const ourData = data;
    const emptyPromises = Promise.all(
      data.map((planet, i) => {
        return Promise.all(
          planet.residents.map((url, i) => {
            if (url) {
              return fetch(url).then(res => res.json());
            }
          })
        );
      })
    ).then(res => {
      const newObj = res.map((el, i) =>
        Object.assign(data[i], { residents: el })
      );
      this.setState({
        data: newObj
      });
    });
  }

  fetchOtherData(data) {
    const originalData = data;
    if (data[0].terrain) {
      // return this.setState({
      return this.getPlanetData(data);
      // });
    }
    const otherData = data.map(person => {
      return fetch(person.homeworld).then(res => res.json());
    });

    Promise.all(otherData)
      .then(res => {
        return res.map((planet, i) => {
          return Object.assign(
            originalData[i],
            { homeworld: planet.name },
            { population: planet.population }
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

  clickedCard(item) {
    console.log("item ", item);

    item.classList.toggle("clicked-card");
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
          clickCard={this.clickedCard}
        />
      </div>
    );
  }
}

export default App;

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

        if (lowerCallType === "vehicles") {
          this.cleanApi(data.results);
        }
      })
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
      return this.getPlanetData(data);
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
    let cardName = card.name;
    let favorites = this.state.favoriteCards;
    let newFavorites = favorites.filter(element => {
      return element.name !== card.name;
    });

    if (newFavorites.length < favorites.length) {
      return this.setState({
        favoriteCards: newFavorites
      });
    } else {
      newFavorites.push(card);
    }

    this.setState({
      favoriteCards: newFavorites
    });
  }

  showFavorites() {
    this.setState({
      favClicked: !this.state.favClicked
    });
  }

  clickedCard(item) {
    item.classList.toggle("clicked-card");
  }

  render() {
    return (
      <div>
        <Background />
        <Controls
          apiCall={this.getApi}
          toggleFav={this.toggleFav}
          clickBtn={this.clickedCard}
        />
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

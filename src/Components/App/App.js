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
      planetData: null,
      peopleData: null,
      vehicleData: null,
      filmData: null,
      favoriteCards: [],
      favClicked: false,
    };
    this.getApi = this.getApi.bind(this);
    this.favoriteCard = this.favoriteCard.bind(this);
    this.toggleFav = this.showFavorites.bind(this);
    this.clickedCard = this.clickedCard.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     data: this.cleanApi()
  //   });
  // }

  // getApi(callType) {
  //   const lowerCallType = callType.toLowerCase();
  //   fetch(`https://swapi.co/api/${lowerCallType}/`)
  //     .then(data => data.json())
  //     .then(data => {
  //       if (lowerCallType === "people") {
  //         this.fetchOtherData(data.results);
  //       }
  //
  //       if (lowerCallType === "planets") {
  //         this.fetchOtherData(data.results);
  //       }
  //
  //       if (lowerCallType === "vehicles") {
  //         this.cleanApi(data.results);
  //       }
  //     })
  //     .catch(err => console.log("bad"));
  // }

  componentDidMount() {
    const planets = this.getApi('planets')
    const people = this.getApi('people')
    const vehicles = this.getApi('vehicles')
    console.log(planets)
  }

  getApi(callType)  {
    return fetch(`https://swapi.co/api/${callType}/`)
      .then(data => data.json())
      .then(data => this.fetchOtherData(data.results))
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
        const readyData = res.map((el, i) =>
        Object.assign(data[i], { residents: el })
      );
      this.setState({
        planetData: readyData
      })
    });
    console.log(emptyPromises)
  }

  getPeopleData(data) {
    const otherData = data.map(person => {
      return fetch(person.homeworld).then(res => res.json());
    });

    Promise.all(otherData)
      .then(res => {
        return res.map((planet, i) => {
          return Object.assign(
            data[i],
            { homeworld: planet.name },
            { population: planet.population }
          );
        });
      })
      .then(newData => {
        if(newData[0].height) {
          this.setState({
            peopleData: newData
          })
        }
      });
  }

  fetchOtherData(data) {
// switch( true ) {
//     case data[0].model: {
//       this.setState({
//         vehicleData: data
//       })
//     }
//
//     case data[0].terrain: {
//       return this.getPlanetData(data);
//     }
//
//     case data[0].species: {
//       this.getPeopleData(data);
//     }
//   }
    if (data[0].model) {
      return this.setState({
        vehicleData: data
      })
    }
    if (data[0].terrain) {
      return this.getPlanetData(data);
    }

    return this.getPeopleData(data);
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
    console.log("item ", item);

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
          favoriteCards={this.state.favoriteCards}
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

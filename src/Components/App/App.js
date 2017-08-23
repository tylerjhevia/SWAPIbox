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
      itemData: null
    };
    this.getApi = this.getApi.bind(this);
    this.favoriteCard = this.favoriteCard.bind(this);
    this.clickedCard = this.clickedCard.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
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
    const film = this.getApi(Helper());
    const planets = this.getApi("planets");
    const people = this.getApi("people");
    const vehicles = this.getApi("vehicles");
  }

  getApi(callType) {
    return fetch(`https://swapi.co/api/${callType}/`)
      .then(data => data.json())
      .then(data => {
        if (data.director) {
          this.fetchOtherData(data);
        } else {
          this.fetchOtherData(data.results);
        }
      });
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
      });
    });
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
        if (newData[0].height) {
          this.setState({
            peopleData: newData
          });
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
    if (data.director) {
      return this.setState({
        filmData: [
          data.opening_crawl,
          data.title,
          data.episode_id,
          data.release_date
        ]
      });
    }
    if (data[0].model) {
      return this.setState({
        vehicleData: data
      });
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

  clickedCard(item) {
    item.classList.toggle("clicked-card");
  }

  selectCategory(category) {
    if (category === "PEOPLE") {
      this.setState({ itemData: this.state.peopleData
    })}
    if (category === "PLANETS") {
      this.setState({ itemData: this.state.planetData
    })}
    if (category === "VEHICLES") {
      this.setState({ itemData: this.state.vehicleData      
    })}
    if (category === "FAVORITES") {
      this.setState({
        itemData: this.state.favoriteCards
      })
    }
  }

  render() {
    return (
      <div>
        <Background filmData={this.state.filmData} />
        <Controls
          selectCategory={this.selectCategory}  
          clickBtn={this.clickedCard}
          favoriteCards={this.state.favoriteCards}
        />
        <CardDisplay
          itemData={this.state.itemData}
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

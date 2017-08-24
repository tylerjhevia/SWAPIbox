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
      itemData: null,
      favClicked: false
    };
    this.getApi = this.getApi.bind(this);
    this.favoriteCard = this.favoriteCard.bind(this);
    this.clickedCard = this.clickedCard.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.favFunc = this.favFunc.bind(this);
  }

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
      })
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
    const planetData = data.map(person => {
      return fetch(person.homeworld).then(res => res.json());
    });

    const speciesData = data.map(person => {
      return fetch(person.species).then(res => res.json());
    })

    Promise.all(speciesData)
    .then(res => {
      return res.map((species, i) => {
        return Object.assign(
          data[i],
          {species: species.name}
        )
      })
    })
    .then(newData => {
      if (newData[0].eye_colors) {
        this.setState({
          peopleData: newData
        })
      }
    })

    Promise.all(planetData)
      .then(res => {
        return res.map((planet, i) => {
          return Object.assign(
            data[i],
            { homeworld: planet.name },
            { population: planet.population },
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
      this.setState({
        favoriteCards: newFavorites
      });
    } else {
      newFavorites.push(card);
      this.setState({
        favoriteCards: newFavorites
      });
    }
  }

  favFunc() {
    this.setState({
      favClicked: true
    })
  }

  clickedCard(item) {
    item.classList.toggle("clicked-card");
  }

  selectCategory(category) {
    if (category === "PEOPLE") {
      this.setState({
        favClicked: false,
        itemData: this.state.peopleData
      });
    }
    if (category === "PLANETS") {
      this.setState({
        favClicked: false,        
        itemData: this.state.planetData
      });
    }
    if (category === "VEHICLES") {
      this.setState({
        favClicked: false,        
        itemData: this.state.vehicleData
      });
    }
    if (category === "FAVORITES") {
      this.setState({
       favClicked: true,
        itemData: this.state.favoriteCards
      });
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
          favFunc={this.favFunc}     
        />
        <CardDisplay
          itemData={this.state.itemData}
          favorites={this.favoriteCard}
          favCards={this.state.favoriteCards}
          favClicked={this.state.favClicked}
          clickCard={this.clickedCard}
          favClicked={this.state.favClicked}
        />
      </div>
    );
  }
}

export default App;

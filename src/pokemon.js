import React from "react"

export default class FetchPokemon extends React.Component {
  state = {
    loading: true,
    pokemon: null,
  };

  async componentDidMount() {
    const pokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=20";
    const response = await fetch(pokemonURL);
    const data = await response.json();
    this.setState({ pokemon: data.results, loading: false });
    console.log(data);

  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>{this.state.pokemon[5].name}</div> }
    </div>
  )
}
} 

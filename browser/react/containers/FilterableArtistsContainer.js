import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  render () {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));
    return (
      <div>
        <FilterInput handleInput={this.handleInput} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }

}

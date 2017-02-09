import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';
export default class PlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputValue: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isButtonDisabled = this.isButtonDisabled.bind(this);
  }

  handleInput (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    console.log(this.state.inputValue);
    const playlistName = this.state.inputValue;
    this.setState({
      inputValue: ''
    });
    this.createPlaylist(playlistName);
  }

  createPlaylist(playlistName){
    axios.post('/api/playlists', { name: playlistName })
    .then(res => res.data)
    .then(result => {
      console.log(result) // response json from the server!
    });
  }

  isButtonDisabled(){
    if(this.state.inputValue.length === 0 || this.state.inputValue.length > 16){
      return true;
    }
    return false;
  }

  render(){
    return (
      <NewPlaylist isButtonDisabled={this.isButtonDisabled} value={this.state.inputValue} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
    );
  }
}

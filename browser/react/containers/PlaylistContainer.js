import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class PlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputValue: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({
      inputValue: ''
    });
  }
  render(){
    return (
      <NewPlaylist valgue={this.state.inputValue} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
    );
  }
}

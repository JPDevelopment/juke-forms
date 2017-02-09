import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

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
    this.setState({
      inputValue: ''
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

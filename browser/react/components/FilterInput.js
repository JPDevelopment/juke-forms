import React from 'react';
import FilterableArtistsContainer from '../containers/FilterableArtistsContainer';
import Artists from './Artists';

const FilterInput = (props) => {

  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        onChange={props.handleInput}
        className="form-control"
        placeholder="Enter artist name"
      />
    </form>
  );
}

export default FilterInput;

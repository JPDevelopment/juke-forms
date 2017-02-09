import React from 'react';

const NewPlaylist = function (props) {
console.log('PROPS:', props);
return (
<div className="well">
  <form onSubmit={props.handleSubmit} className="form-horizontal">
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        {!props.value.length ?
          <div className="alert alert-warning">Please enter a name</div> : null}

        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input value={props.value} onChange={props.handleInput} className="form-control" type="text" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button disabled={props.isButtonDisabled()} type="submit" className="btn btn-success">Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)}
export default NewPlaylist;

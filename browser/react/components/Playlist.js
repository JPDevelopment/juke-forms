import React from 'react';

export default class Playlist extends React.Component {

  render () {
    return (
      <div>
        <h3>{ playlist.name }</h3>
          <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
          { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
          <hr />
      </div>
    )
  }
}

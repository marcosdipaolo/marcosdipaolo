import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import data from '../music-data';
import AudioTrack from './AudioTrack';

const Playlist = ({ tKey, playingTrack }) => {
  const [playlistOpened, setPlaylistOpened] = useState(false);
  useEffect(() => {
    setPlaylistOpened(false);
  }, [playingTrack]);
  return (
    <div
      className={`playlist${playlistOpened ? ' opened' : ''}`}
    >
      <div className={`playlist-toggle text-center fs-30${playlistOpened ? ' opened' : ''}`}>
        <i
          style={{ display: playlistOpened ? 'none' : 'inline' }}
          onClick={(e) => {
            e.stopPropagation();
            setPlaylistOpened(true);
          }}
          className="fa fa-angle-up "
        />
        <i
          style={{ display: !playlistOpened ? 'none' : 'inline' }}
          onClick={(e) => {
            e.stopPropagation();
            setPlaylistOpened(false);
          }}
          className="fa fa-angle-down"
        />
      </div>
      <div className="tracks">
        {data[tKey].map((track) => <AudioTrack tKey={tKey} key={track.title} track={track} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ playingTrack: state.playingTrack });

export default connect(mapStateToProps)(Playlist);

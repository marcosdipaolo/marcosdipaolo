import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import wave from '../static/images/wave.gif';

const PlayingInfo = ({ playingTrack }) => {
  const [trackPlaying, setTrackPlaying] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (playingTrack) {
      setTrackPlaying(playingTrack);
    }
    if (trackPlaying) {
      setAudioElement(document.getElementById(`playing-track-${trackPlaying.key}`));
      if (audioElement) {
        audioElement.addEventListener('play', () => {
          setIsMusicPlaying(true);
        });
        audioElement.addEventListener('pause', () => {
          setIsMusicPlaying(false);
        });
      }
    }
    if (audioElement) {
      return () => {
        audioElement.removeEventListener('play', () => {
          setIsMusicPlaying(true);
        });
        audioElement.removeEventListener('pause', () => {
          setIsMusicPlaying(false);
        });
      };
    }
  }, [playingTrack, trackPlaying, audioElement]);
  return trackPlaying && isMusicPlaying ? (
    <p className="playing-info">
      <span>{trackPlaying.title}</span>
      {' '}
      -
      {' '}
      <span>{trackPlaying.performer}</span>
      {' '}
      <span>
        <img src={wave} alt="Wave GIF" width="40" />
      </span>
    </p>
  ) : '';
};

const mapStateToProps = (state) => ({ playingTrack: state.playingTrack });

export default connect(mapStateToProps)(PlayingInfo);

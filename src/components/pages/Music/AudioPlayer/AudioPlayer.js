import '../../../../sass/audio-player.scss';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import covers from '../covers-data';
import ProgressBar from './ProgressBar';
import Playlist from './Playlist';
import { setPlayingTrack } from '../../../../actions';
import musicData from '../music-data';

const AudioPlayer = ({
  tKey, closeHandler, playingTrack, setPlayingTrack,
}) => {
  const [volume, setVolume] = useState(70);
  const [audioEl, setAudioEl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    if (!playingTrack || (tKey !== playingTrack.key)) {
      setPlayingTrack(musicData[tKey][0]);
      setPlaying(true);
    }
    if (audioEl && audioEl.src !== '') {
      setPlaying(!playing);
    }
  };

  const endedHandler = () => {
    if (typeof musicData[tKey][playingTrack.order] === 'undefined') {
      return;
    }
    setPlayingTrack(musicData[tKey][playingTrack.order]);
  };

  useEffect(() => {
    if (audioEl) {
      audioEl.addEventListener('playing', () => {
        setPlaying(true);
      });
      audioEl.addEventListener('ended', endedHandler);
      // audioEl.addEventListener('timeupdate', endedHandler);
      try {
        playing ? audioEl.play() : audioEl.pause();
      } catch (e) {
        console.log(e);
      }
    } else {
      setPlaying(false);
    }
  },
  [playing, audioEl]);

  useEffect(() => {
    setAudioEl(document.getElementById(`playing-track-${tKey}`));
    if (audioEl) {
      if (playingTrack) {
        try {
          audioEl.play().then(() => setVolume(70));
        } catch (e) {
          console.log(e);
        }
      } else {
        audioEl.pause();
        setPlaying(false);
      }
    }
  }, [playingTrack, audioEl]);

  const changingVolume = (e) => {
    if ((tKey === playingTrack.key) && audioEl) {
      setVolume(e.target.value);
      audioEl.volume = volume / 100;
    }
  };

  const title = ((playingTrack && playingTrack.key === tKey) ? playingTrack.title : '');

  return (
    <section className={`audio-player ${tKey}`}>
      <i onClick={closeHandler} className="fa fa-arrow-left close" />
      <div className="image" style={{ backgroundImage: `url(${covers[tKey]})` }} />
      <ProgressBar width={25} />
      <br />
      <div className="play">
        <i
          className={`fa fa-${playing ? 'pause-circle' : 'play-circle'} fs-36 play`}
          onClick={toggle}
        />
      </div>
      <div className={`track-data${(!playingTrack || playingTrack.key !== tKey) ? ' mb-27' : ''}`}>
        <p className="fs-14">{title}</p>
      </div>
      <div className="volume">
        <i className="fa fa-volume-down" />
        <div className="range">
          <input
            onChange={changingVolume}
            type="range"
            value={volume}
          />
        </div>
        <i className="fa fa-volume-up" />
      </div>
      <Playlist tKey={tKey} />
      <div className="social" />
    </section>
  );
};

const mapStateToProps = (state) => ({ playingTrack: state.playingTrack });

export default connect(mapStateToProps, { setPlayingTrack })(AudioPlayer);

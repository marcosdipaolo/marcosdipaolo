import { connect } from 'react-redux';
import { setPlayingTrack } from '../../../../actions';

const AudioTrack = ({
  track, setPlayingTrack, playingTrack, tKey,
}) => {
  const resolveAcitveClass = (title) => {
    if (!playingTrack) {
      return '';
    }
    return ((title === playingTrack.title) && tKey === playingTrack.key) ? ' active' : '';
  };
  // const currentTime = () => {
  //   if (audioEl) {
  //     const min = Math.round(audioEl.currentTime / 60);
  //     const seg = audioEl.currentTime - (min * 60);
  //     return (audioEl && track.title === playingTrack.title) ? `${min}:${seg}` : '0:00';
  //   }
  //   return '0:00';
  // };
  return (
    <div className={`track${resolveAcitveClass(track.title)}`}>
      <p className="track-line">
        <span className="order">{track.order}</span>
        <span onClick={() => { setPlayingTrack(track, tKey); }} className="title">{track.title}</span>
        <span className="duration d-inline-block" />
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({ playingTrack: state.playingTrack });

export default connect(mapStateToProps, { setPlayingTrack })(AudioTrack);

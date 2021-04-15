import { useState } from 'react';
import play from '../../../static/music/images/play.png';
import AlbumInfo from './AlbumInfo';
import AudioPlayer from './AudioPlayer/AudioPlayer';

const Album = ({
  tKey, title, thumb, subTitle,
}) => {
  const [flipped, setFlipped] = useState(false);
  const clickHandler = () => {
    setFlipped(!flipped);
  };
  return (
    <div className={`album col-lg-4 px-md-2${flipped ? ' flipped' : ''}`}>
      <div className="inner px-5">
        <div className="front">
          <div
            className="album-thumb"
            style={{ backgroundImage: `url(${thumb})` }}
            onClick={clickHandler}
          >
            <i className="fa fa-info" aria-hidden="true" />
            <div className="icon-wrapper">
              <img src={play} alt="" />
            </div>
            <AlbumInfo tKey={tKey} />
          </div>
          <div className="album-meta">
            <p>{title}</p>
            <small>{subTitle}</small>
          </div>
        </div>
        <div className="back">
          <AudioPlayer tKey={tKey} closeHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Album;

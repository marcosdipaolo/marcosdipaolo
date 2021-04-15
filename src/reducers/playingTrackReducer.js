import { SET_PLAYING_TRACK } from './types';

const playingTrackReducer = (oldTrack = null, action) => {
  switch (action.type) {
    case SET_PLAYING_TRACK:
      return action.payload;
    default:
      return oldTrack;
  }
};

export default playingTrackReducer;

import { StateProps } from '../../@types/state';

const getAllVideosSelector = (appState: StateProps) => appState.videos.videos;
const getVideoByIdSelector = (appState: StateProps) =>
  appState.videos.videoSelected;
const getFavoritesVideosSelector = (appState: StateProps) =>
  appState.videos.favorites;
const getVideoIsFavoritedSelector = (appState: StateProps) =>
  appState.videos.videoIsFavorited;

export const videoSelectors = {
  videos: getAllVideosSelector,
  video: getVideoByIdSelector,
  favorites: getFavoritesVideosSelector,
  videoIsFavorited: getVideoIsFavoritedSelector,
};

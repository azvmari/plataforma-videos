import { StateProps } from '../../@types/state';

const getAllVideosSelector = (appState: StateProps) => appState.videos.videos;
const getVideoByIdSelector = (appState: StateProps) =>
  appState.videos.videoSelected;

export const videoSelectors = {
  videos: getAllVideosSelector,
  video: getVideoByIdSelector,
};

import { StateProps } from '../../@types/state';

const getAllVideosSelector = (appState: StateProps) => appState.videos.videos;

export const videoSelectors = {
  videos: getAllVideosSelector,
};

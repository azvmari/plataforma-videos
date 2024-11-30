import { VideoState } from './video.reducer';

const getAllVideosSelector = (appState: VideoState) => appState.videos;

export const videoSelectors = {
  videos: getAllVideosSelector,
};

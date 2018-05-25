import * as types from './types';

import { Asset, AssetsActionFailure, AssetsActionSuccess } from './interfaces';

// action creators
/**
 * Get assets success action creator
 * 
 * @param {Asset[]} assets
 * @returns {AssetsActionSuccess}
 */
export const getAssetsSuccess = (assets: Asset[]): AssetsActionSuccess => {
  return { assets, type: types.GET_ASSETS_SUCCESS };
};

/**
 * Get assets failure action creator
 * 
 * @returns {AssetsActionFailure}
 */
export const getAssetsFailure = (): AssetsActionFailure => {
  return { type: types.GET_ASSETS_FAILURE };
};

/**
 * Returns an object containing action type and payload
 * 
 * @param {any} dispatch
 * @returns {object} action type and payload
 */
export const getAssets = (dispatch) => {
  // TODO: make a call to get the data from the backend
  return new Promise((resolve, reject) => {
    resolve([{
      id: 1,
      name: 'Macs',
    }]);
  })
  .then((assets: Asset[]) => {
    dispatch(getAssetsSuccess(assets));
  });
};

const assetsInitialState = {
  data: [
    {
      id: 1,
      name: 'mac',
    },
  ],
  isLoading: false,
};

// reducer
/**
 * This reducer changes the assets state of the application
 *
 * @param {object} [state=assetsInitialState]
 * @param action = assetsActions
 * @returns {object} state
 */
export const reducer = (state = assetsInitialState, action) => {
  switch (action.type) {
    case types.GET_ASSETS_SUCCESS:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

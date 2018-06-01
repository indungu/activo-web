import * as types from './types';

import {
  CategoriesActionFailure,
  CategoriesActionSuccess,
  Category
} from './interfaces';

// action creators
/**
 * Get categories success action creator
 *
 * @param {Category[]} categories
 * @returns {CategoriesActionSuccess}
 */
export const getAssetCategoriesSuccess = (
  categories: Category[]
): CategoriesActionSuccess => {
  return { categories, type: types.GET_CATEGORIES_SUCCESS };
};

/**
 * Get categories failure action creator
 *
 * @returns {CategoriesActionFailure}
 */
export const getAssetCategoriesFailure = (): CategoriesActionFailure => {
  return { type: types.GET_CATEGORIES_FAILURE };
};

/**
 * Returns an object containing action type and payload
 *
 * @param {any} dispatch
 * @returns {object} action type and payload
 */
export const getAssetCategories = dispatch => {
  // TODO: make a call to get the data from the backend
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        name: 'Macs',
        count: 10
      }
    ]);
  }).then((categories: Category[]) => {
    dispatch(getAssetCategoriesSuccess(categories));
  });
};

const categoriesInitialState = {
  data: [
    {
      id: 1,
      name: 'Apple Tv',
      count: 16
    },
    {
      id: 2,
      name: 'Chairs',
      count: 2839
    },
    {
      id: 3,
      name: 'Chromebooks',
      count: 121
    },
    {
      id: 4,
      name: 'Macbooks',
      count: 438
    },
    {
      id: 5,
      name: 'Monitors',
      count: 293
    },
    {
      id: 6,
      name: 'USB Dongles',
      count: 382
    },
    {
      id: 7,
      name: 'White Board',
      count: 28
    }
  ],
  isLoading: false
};

// reducer
/**
 * This reducer changes the categories state of the application
 *
 * @param {object} [state=categoriesInitialState]
 * @param action = categoriesActions
 * @returns {object} state
 */
export const reducer = (state = categoriesInitialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;

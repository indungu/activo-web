import { CategoriesActionFailure, CategoriesActionSuccess, Category } from './interfaces';
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from './types';

// action creators
/**
 * Get categories success action creator
 *
 * @param {Category[]} categories
 * @returns {CategoriesActionSuccess}
 */
export const getAssetCategoriesSuccess = (categories: Category[]): CategoriesActionSuccess => {
  return { categories, type: GET_CATEGORIES_SUCCESS };
};

/**
 * Get categories failure action creator
 *
 * @returns {CategoriesActionFailure}
 */
export const getAssetCategoriesFailure = (): CategoriesActionFailure => {
  return { type: GET_CATEGORIES_FAILURE };
};

// action creators
/**
 * Returns an object containing action type and payload
 *
 * @param {any} dispatch
 * @returns {object} action type and payload
 */
export const getAssetCategories = (dispatch) => {
  // TODO: make a call to get the data from the backend
  return new Promise((resolve, reject) => {
    resolve([
      {
        count: 10,
        id: 1,
        name: 'Macs',
      },
    ]);
  })
  .then((categories: Category[]) => {
    dispatch(getAssetCategoriesSuccess(categories));
  });
};

const categoriesInitialState = {
  data: [
    {
      count: 16,
      id: 1,
      name: 'Apple Tv',
    },
    {
      count: 2839,
      id: 2,
      name: 'Chairs',
    },
    {
      count: 121,
      id: 3,
      name: 'Chromebooks',
    },
    {
      count: 438,
      id: 4,
      name: 'Macbooks',
    },
    {
      count: 293,
      id: 5,
      name: 'Monitors',
    },
    {
      count: 382,
      id: 6,
      name: 'USB Dongles',
    },
    {
      count: 382,
      id: 7,
      name: 'White Board',
    },
  ],
  isLoading: false,
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
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;

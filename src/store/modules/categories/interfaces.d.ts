import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from './types';

export interface CategoriesActionSuccess {
  categories: Category[];
  type: GET_CATEGORIES_SUCCESS;
}

export interface CategoriesActionFailure {
  type: GET_CATEGORIES_FAILURE;
}

interface Category {
  id: string,
  name: string,
  count: number
}

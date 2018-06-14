import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from './types';

export interface CategoriesActionSuccess {
  categories: Category[];
  type: GET_CATEGORIES_SUCCESS;
}

export interface CategoriesActionFailure {
  type: GET_CATEGORIES_FAILURE;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

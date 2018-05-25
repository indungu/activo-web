import { Category } from 'modules/categories/interfaces';

export interface DashboardProps {
  categories: Category[];
}

export interface DashboardState {
  isLoadingCategories: boolean;
}

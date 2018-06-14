import { Asset } from 'modules/assets/interfaces';

export interface SingleCategoryProps {
  assets: Asset[];
  getAssets?: (id: string) => any;
  match: {
    params: {
      id: string;
    }
  }
}

export interface SingleCategoryState {
  isLoadingSingleCategory: boolean;
}

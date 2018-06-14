import { GET_ASSETS_FAILURE, GET_ASSETS_SUCCESS } from './types';

export interface AssetsActionSuccess {
  assets: Asset[];
  type: GET_ASSETS_SUCCESS;
}

export interface AssetsActionFailure {
  type: GET_ASSETS_FAILURE;
}

export interface Asset {
  id: string;
  categoryId: string;
  assignee: string;
  date: string;
  serialNumber: string;
  assetTag: string;
  warranty: string;
}

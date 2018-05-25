import { GET_ASSETS_SUCCESS, GET_ASSETS_FAILURE } from './types';

export interface AssetsActionSuccess {
  assets: Asset[];
  type: GET_ASSETS_SUCCESS;
}

export interface AssetsActionFailure {
  type: GET_ASSETS_FAILURE;
}

interface Asset {
  id: string,
  name: string
}

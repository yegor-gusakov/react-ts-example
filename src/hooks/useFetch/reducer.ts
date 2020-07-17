import { Action } from './actions';
import { FetchData } from './types';

export enum ActionTypes {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
}

interface FetchState {
  isLoading: boolean;
  data: FetchData | [];
  error: null | string;
}

export const reducer = (state: FetchState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        data: [],
        error: null,
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

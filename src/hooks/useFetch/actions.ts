import { Dispatch } from 'react';
import { ActionTypes } from './reducer';
import { FetchData } from './types';

export interface FetchInit {
  type: ActionTypes.FETCH_INIT;
}

export interface FetchSuccess {
  type: ActionTypes.FETCH_SUCCESS;
  payload: FetchData | [];
}

export interface FetchFailure {
  type: ActionTypes.FETCH_FAILURE;
  payload: string;
}

export type Action = FetchInit | FetchSuccess | FetchFailure;

const fetchInit = (): FetchInit => ({ type: ActionTypes.FETCH_INIT });

const fetchSuccess = (payload: FetchData): FetchSuccess => ({ type: ActionTypes.FETCH_SUCCESS, payload });

const fetchFailure = (payload: string): FetchFailure => ({ type: ActionTypes.FETCH_FAILURE, payload });

export const doFetch = async (didCancel: boolean, request: () => Promise<Response>, dispatch: Dispatch<Action>) => {
  dispatch(fetchInit());

  try {
    const response = await request();
    const result: FetchData = await response.json();

    if (didCancel) return;

    dispatch(fetchSuccess(result));
  } catch (err) {
    if (didCancel) return;
    console.error(err);
    dispatch(fetchFailure(`Something went wrong!!!`));
  }
};

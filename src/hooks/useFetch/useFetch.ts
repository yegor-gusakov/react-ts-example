import { useState, useReducer, useEffect, Dispatch, SetStateAction } from 'react';
import { reducer } from './reducer';
import { doFetch } from './actions';

export const useFetch = (request: () => Promise<Response>, isDoRequest: boolean, setIsDoRequest: Dispatch<SetStateAction<boolean>>) => {
  const [fetchState, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    if (!isDoRequest) return;

    let didCancel = false;

    doFetch(didCancel, request, dispatch);
    setIsDoRequest(false);

    return () => {
      didCancel = true;
    };
  }, [isDoRequest, request]);

  return fetchState;
};

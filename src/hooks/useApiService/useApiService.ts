import { useState, useCallback } from 'react';
import { apiService } from '../../services';
import { useFetch } from '../';

export enum ApiMethods {
  getRooms = `getRooms`,
  getConsentForm = `getConsentForm`,
  getConsentFormDetails = `getConsentFormDetails`,
}

export const useApiService = (initApiMethod: ApiMethods, initIsDoRequest: boolean = true, initUrl: string = ``) => {
  const [apiMethod, setApiMethod] = useState(initApiMethod);
  const [isDoRequest, setIsDoRequest] = useState(initIsDoRequest);
  const [url, setUrl] = useState(initUrl);
  const request = useCallback((): Promise<Response> => apiService[apiMethod](url), [url]);

  return { fetchState: useFetch(request, isDoRequest, setIsDoRequest), setApiMethod, setIsDoRequest, setUrl };
};

import { ApiProvider } from './ApiProvider';


export class ApiService {
  static createApiService(baseUrl: string) {
    return new ApiService(new ApiProvider(baseUrl));
  }

  private apiProvider: ApiProvider;

  constructor(apiProvider: ApiProvider) {
    this.apiProvider = apiProvider;
  }

  getRooms = async (): Promise<Response> => {
    const res = await this.apiProvider.getResource(`/rooms.json`);
    return res;
  };

  getConsentForm = async (): Promise<Response>  => {
    const res = await this.apiProvider.getResource(`/consent-forms.json`);
    return res;
  };

  getConsentFormDetails = async (url: string): Promise<Response>  => {
    const res = await this.apiProvider.getResource(`/consent-form-details/${url}`);
    return res;
  };
}

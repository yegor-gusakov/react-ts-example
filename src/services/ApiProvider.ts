export class ApiProvider {

  constructor(private baseUrl: string) {}

  getResource = async (url: string): Promise<Response> => {
    const response = await new Promise<Response>((resolve) => {
      setTimeout(() => resolve(fetch(`${this.baseUrl}${url}`)), 1000)
    });
    return response;
  };

}
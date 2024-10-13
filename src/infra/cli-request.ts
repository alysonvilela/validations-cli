class RequestSingleton {
  static instance: RequestSingleton | null = null;

  static getInstance(): RequestSingleton {
    if (RequestSingleton.instance === null) {
      RequestSingleton.instance = new RequestSingleton();
    }
    return RequestSingleton.instance;
  }

  response(message: string): void {
    console.log(message);
  }
}

export const cliRequest = RequestSingleton.getInstance();

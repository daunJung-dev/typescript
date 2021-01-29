{
  class Timeouterror extends Error {}

  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      // userService가 할 수 있는것은 무엇일까..
      //   정확하게 뭔가 할 수 있는게 아니라면 더 상위에서 하는 것이 좋다.
      // login...
    }
  }

  // const client = new NetworkClient();
  // const service = new UserService(client);

  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}

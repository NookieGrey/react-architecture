class AuthStore {
  token = null;

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }
}

export const authStore = new AuthStore();
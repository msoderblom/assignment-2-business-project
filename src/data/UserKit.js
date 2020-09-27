const ROOT_URL = "https://frebi.willandskill.eu/";

export default class UserKit {
  async register(registrationData) {
    const url = `${ROOT_URL}auth/users/`;

    const payload = registrationData;
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async activateUser(uid, token) {
    const url = `${ROOT_URL}auth/users/activate/`;
    const payload = {
      uid,
      token,
    };

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async login(email, password) {
    const url = `${ROOT_URL}api-token-auth/`;

    const payload = { email, password };

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async getUser() {
    const url = `${ROOT_URL}api/v1/me`;

    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }
  async getCustomerList() {
    const url = `${ROOT_URL}api/v1/customers`;

    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }
  async getCustomerDetails(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;

    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }
  async deleteCustomerDetails(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;

    return fetch(url, {
      method: "DELETE",
      headers: this.getPrivateHeaders(),
    });
  }
  async updateCustomerDetails(id, payload) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;

    return fetch(url, {
      method: "PATCH",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload),
    });
  }
  async createCustomer(data) {
    const url = `${ROOT_URL}api/v1/customers`;
    const payload = data;

    return fetch(url, {
      method: "POST",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload),
    });
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token);
  }
  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN");
  }
  getPublicHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }
  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
}

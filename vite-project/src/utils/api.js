const BASE_URL = 'https://contact-api.dicoding.dev/v1';

// Function to retrieve access token from local storage
function getAccessToken() {
  return localStorage.getItem('accessToken');
}

// Function to store access token in local storage
function putAccessToken(accessToken) {
  localStorage.setItem('accessToken', accessToken);
}

// Function to make a fetch request with the access token in the headers
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  });
}

// Function for user login
async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

// Function for user registration
async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

// Function to get the logged-in user's information
async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

// Function to add a new contact
async function addContact({ name, tag }) {
  const response = await fetchWithToken(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, tag }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

// Function to get all contacts
async function getContacts() {
  const response = await fetchWithToken(`${BASE_URL}/contacts`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

// Function to delete a contact
async function deleteContact(id) {
  const response = await fetchWithToken(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

// Exporting functions to be used in other parts of the application
export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addContact,
  getContacts,
  deleteContact
};

const URL = "http://localhost:3001";

function fetchRequest(url, options) {
  return fetch(url, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => {
      console.log("Error:", err)
    });
}

export function getShopsByKeyword(keyword) {
  keyword = { keyword: keyword }
  return fetchRequest(`${URL}/filteredshops`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(keyword)
  });
}

export function register(user) {
  return fetchRequest(`${URL}/register`, {
    method: "POST",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}

export function login(user) {
  return fetchRequest(`${URL}/login`, {
    method: "POST",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}

export function profile() {
  return fetchRequest(`${URL}/login`, {
    method: "GET",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
  });
}

export function logout() {
  return fetchRequest(`${URL}/logout`, {
    method: "POST",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
  });
}
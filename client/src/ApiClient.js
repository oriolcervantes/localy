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

export function getShopsByUserId(UserId) {
  UserId = { UserId: UserId }
  return fetchRequest(`${URL}/usershops`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(UserId)
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
  return fetchRequest(`${URL}/profile`, {
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

export function createShop(shop) {
  return fetchRequest(`${URL}/createshop`, {
    method: "POST",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(shop)
  });
}

export function uploadImage(base64EncodedImage) {
  return fetchRequest(`${URL}/uploadimage`, {
    method: "POST",
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: base64EncodedImage })
  })
}
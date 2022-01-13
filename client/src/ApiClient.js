const URL = "http://localhost:3001";

function fetchRequest(url, options) {
  return fetch(url, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => {
      console.log("Error:", err)
    });
}

function getShopsByKeyword(keyword) {
  keyword = { keyword: keyword }
  return fetchRequest(`${URL}/filteredshops`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(keyword)
  });
}

export default getShopsByKeyword
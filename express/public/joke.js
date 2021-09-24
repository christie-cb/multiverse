function getApiData() {
  return fetch("https://icanhazdadjoke.com", {
      method: 'GET',
      headers: {
          'Accept': 'application/json'
      }
  })
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}

module.exports = { getApiData };

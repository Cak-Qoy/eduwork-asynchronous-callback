addEventListener('DOMContentLoaded', () => {
  console.log('Hello World');
  setLoading(true)
  fetchData()
    .then((data) => {
      setLoading(false)
      console.log(data)
      data.forEach((item) => {
        addRow(item);
      })
    })
});

const URL = 'https://jsonplaceholder.typicode.com/users';
function fetchData() {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

function addRow(data) {
  const table = document.getElementById('table');
  const row = `
  <tr>
    <td scope="row">${data.id}</td>
    <td>${data.name}</td>
    <td>${data.username}</td>
    <td>${data.email}</td>
    <td>${getFullAddress(data.address)}</td>
    <td>${data.company.name}</td>
  </tr>
  `
  const prev = table.childNodes[3].innerHTML;
  table.childNodes[3].innerHTML = prev + row
}

function getFullAddress(address) {
  return `${address.street} ${address.suite} ${address.city}, ${address.zipcode}`
}

function setLoading(active) {
  const loading = document.getElementById('loading');

  if (active) {
    loading.style.display = 'block'
  } else {
    loading.style.display = 'none'
  }
}
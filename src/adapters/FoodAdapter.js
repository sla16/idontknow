import { fetchJSON } from './fetch'

export function getFoodLocations (data) {
  const { location } = data
  const myHeaders = {
    Accept: 'application/json',
    'user-key': '109ea15327f6c4fb86908330f2c13c32'
  }

  return fetchJSON(`https://developers.zomato.com/api/v2.1/locations?query=Boston`, {
    method: 'get',
    headers: myHeaders
  }).then((response) => {
    console.log(response);
    return response
  })
}

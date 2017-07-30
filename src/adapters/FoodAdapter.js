import { doCORSRequest, fetchJSON } from './fetch'

export function getNearbyPlaces (data) {
  const { callback, location } = data;
  const headers = new Headers();
  const nearbySearch = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  const key = 'AIzaSyDpn22UdohBQhfbn_lCY844X7um2TgpoEw'
  const radius = 1609;  
  const formattedLocation = `${location.latitude},${location.longitude}`

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  return doCORSRequest({
    method: 'GET',
    url: `${nearbySearch}location=${formattedLocation}&radius=${radius}&type=restaurant&key=${key}`
  }, (result) => {
    callback(result.results)
  })
}

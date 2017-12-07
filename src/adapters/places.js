import { doCORSRequest, fetchJSON } from './fetch';

/*
places photos
https://maps.googleapis.com/maps/api/place/photo?photoreference=PHOTO_REFERENCE&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=YOUR_API_KEY
*/

var API_KEY = 'AIzaSyDpn22UdohBQhfbn_lCY844X7um2TgpoEw';

export function getNearbyPlaces (data) {
  const { callback, keyword, location, type } = data;
  const headers = new Headers();
  const nearbySearch = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  const radius = 1609;  
  const formattedLocation = `${location.latitude},${location.longitude}`;

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  return doCORSRequest({
    method: 'GET',
    url: `${nearbySearch}location=${formattedLocation}&radius=${radius}&keyword=${keyword}&type=${type}&key=${API_KEY}`
  }, (result) => {
    callback(result.results);
  });
}

export function selectPlace (data) {
  const { callback, place } = data;
  const photoReference = place.photos[0].photo_reference;
  const defaultHeight = 300,
    defaultWidth = 300;

  place.photoUrl = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}&sensor=false&maxheight=${defaultHeight}&maxwidth=${defaultWidth}&key=${API_KEY}`;
  callback(place);
}

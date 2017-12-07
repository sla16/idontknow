const DEFAULT_TIME_LIMIT = 300000;
const HTTP_OK_LOWER_LIMIT = 200;
const HTTP_OK_UPPER_LIMIT = 300;

/** Need this CORS Request or requests will be blocked **/
const CORS_API_URL = 'https://cors-anywhere.herokuapp.com/';
export function doCORSRequest(options, callback) {
  var x = new XMLHttpRequest();
  x.open(options.method, CORS_API_URL + options.url);
  x.onload = x.onerror = function() {
    callback(
      JSON.parse(x.response)
    );
  };
  if (/^POST/i.test(options.method)) {
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  x.send(options.data);
}

function ensureSuccess (response) {
  console.log('ensureSuccess:', response);

  if (response.status >= HTTP_OK_LOWER_LIMIT && response.status < HTTP_OK_UPPER_LIMIT) {
    return response;
  }

  if (response.json) {
    return response.json().then((json) => {
      response.jsonData = json;
      throw response;
    });
  }

  throw response;
}

function fetchWithTimeout (url, options = {}, timeLimit = DEFAULT_TIME_LIMIT) {
  options.credentials = 'include';

  return new Promise((resolve, reject) => {
    const timeoutId = window.setTimeout(() => {
      reject({
        status: 408,
        statusText: `${timeLimit} milliseconds has gone by with no response`
      });
    }, timeLimit);

    fetch(url, options)
      .then(
        (response) => {
          console.log('fetchWithTimeout success:', response);
          window.clearTimeout(timeoutId);
          resolve(response);
        },
        (response) => {
          console.log('fetchWithTimeout failure:', response);
          window.clearTimeout(timeoutId);
          reject(response);
        }
      );
  })
    .then(ensureSuccess);
}

function fetchJSON (url, options = {}, timeLimit = DEFAULT_TIME_LIMIT) {
  return fetchWithTimeout(url, options, timeLimit)
    .then((response) => response.json().then((json) => {
      response.jsonData = convertObjectKeysToCamelCase(json);
      return response;
    }));
}

const UNDERSCORES = /_+(.)/g;

function replaceUnderscores (match, capture1) {
  return capture1.toUpperCase();
}

function convertObjectKeysToCamelCase (item) {
  if (item) {
    if (Array.isArray(item)) {
      item.forEach(convertObjectKeysToCamelCase);
    } else if (typeof item === 'object') {
      Object.keys(item).forEach((keyOld) => {
        const value = item[keyOld];
        const keyNew = keyOld.replace(UNDERSCORES, replaceUnderscores);

        delete item[keyOld];
        item[keyNew] = convertObjectKeysToCamelCase(value);
      });
    }
  }
  return item;
}

export { fetchJSON, fetchWithTimeout };

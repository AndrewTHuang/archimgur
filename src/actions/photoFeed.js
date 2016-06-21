export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const requestPhotos = (feed) => {
  return {
    type: REQUEST_PHOTOS
  }
}

export const receivePhotos = (feed, photos) => {
  return {
    type: RECEIVE_PHOTOS,
    feed,
    photos
  }
}

export const fetchPhotos = (feed) => {
  return dispatch => {
    // Dispatch the REQUEST_PHOTOS action
    dispatch(requestPhotos(feed))

    const apiURLs = {
      'cabin': 'https://api.imgur.com/3/gallery/r/CabinPorn/',
      'architecture': 'https://api.imgur.com/3/gallery/t/architecture/'
    }

    return fetch(apiURLs[feed], {
      headers: {
        'Authorization': 'Client-ID 4be88f0185b83d5'
      }
    })
    .then(res => {
      if (res.ok) {
        // Create storage array
        // Parse relevant data from res photo object
          // url, description, datetime, viewcount
        // Push data to array
        // dispatch(receivePhotos(feed, array))
      } else {
        console.log('Uh oh, something went wrong! Got status code ' + res.status);
      }
    })
    .catch(err => {
      console.log('An error occurred: ' + err);
    })
  }
}

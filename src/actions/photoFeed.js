export const CHANGE_FEED = 'CHANGE_FEED';
export const UPDATE_DATA_SOURCE = 'UPDATE_DATA_SOURCE';
export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const changeFeed = (newFeed) => {
  return {
    type: CHANGE_FEED,
    newFeed
  }
}

export const fetchPhotosOnFeedChange = (feed) => {
  return dispatch => {
    dispatch(changeFeed(feed));
    dispatch(fetchPhotos(feed));
  }
}

export const updateDataSource = (feed, photos) => {
  return {
    type: UPDATE_DATA_SOURCE,
    feed,
    photos
  }
}

export const requestPhotos = () => {
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
      return res.json()
    })
    .then(photos => {
      if (photos.success) {
        let feedCards = [];

        for (var i = 0; i < 10; i++) {
          let photo = (feed === 'cabin')
            ? photos.data[i]
            : photos.data.items[i]

          let cardData = {
            uri: photo.link,
            description: photo.description,
            datetime: photo.datetime,
            views: photo.views,
            title: photo.title
          }
          feedCards.push(cardData);
        }

        dispatch(receivePhotos(feed, feedCards));
        dispatch(updateDataSource(feed, feedCards));
      } else {
        console.log('Uh oh, something went wrong! Got status code ' + res.status);
      }
    })
    .catch(err => {
      console.log('An error occurred: ' + err);
    })
  }
}

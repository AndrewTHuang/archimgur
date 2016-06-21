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

export const fetchPhotosOnFeedChange = (feed, timesFetched) => {
  return dispatch => {
    dispatch(changeFeed(feed));
    dispatch(fetchPhotos(feed, timesFetched));
  }
}

export const fetchPhotosOnEndReached = (feed, timesFetched) => {
  return dispatch => {
    dispatch(fetchPhotos(feed, timesFetched));
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

export const receivePhotos = (feed, photos, timesFetched) => {
  return {
    type: RECEIVE_PHOTOS,
    feed,
    photos,
    timesFetched: ++timesFetched
  }
}

export const fetchPhotos = (feed, timesFetched) => {
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
    .then(data => {
      if (data.success) {
        let feedCards = [];
        let startIndex = timesFetched * 1;
        let endIndex = (timesFetched + 1) * 10;

        for (let i = startIndex; i < endIndex; i++) {
          let photo = (feed === 'cabin')
            ? data.data[i]
            : data.data.items[i]

          let cardData = {
            id: photo.id,
            uri: photo.link,
            description: photo.description,
            datetime: photo.datetime,
            views: photo.views,
            title: photo.title
          }
          feedCards.push(cardData);
        }

        dispatch(receivePhotos(feed, feedCards, timesFetched));
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

export const CHANGE_FEED        = 'CHANGE_FEED';
export const UPDATE_DATA_SOURCE = 'UPDATE_DATA_SOURCE';
export const REQUEST_PHOTOS     = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS     = 'RECEIVE_PHOTOS';

export const changeFeed = (newFeed) => {
  return {
    type: CHANGE_FEED,
    newFeed
  }
}

export const fetchPhotosOnFeedChange = (feed) => {
  // When we switch tabs, we need to reflect that feed change and also fetch the new batch of photos
  return dispatch => {
    dispatch(changeFeed(feed));
    dispatch(fetchPhotos(feed, 0, 'FeedChange')); // reset timesFetched to 0
  }
}

export const fetchPhotosOnEndReached = (feed, timesFetched) => {
  // When we reach the end of the list, we simply fetch the next 10 photos for the given feed
  return dispatch => {
    dispatch(fetchPhotos(feed, timesFetched, 'EndReached'));
  }
}

export const updateDataSource = (feed, photos, feedOrEnd) => {
  return {
    type: UPDATE_DATA_SOURCE,
    feed,
    photos,
    feedOrEnd
  }
}

export const requestPhotos = (feedOrEnd) => {
  // REQUEST_PHOTOS is dispatched when a fetch is initiated and is responsible for rendering (or hiding) the loading spinner
  return {
    type: REQUEST_PHOTOS,
    feedOrEnd
  }
}

export const receivePhotos = (feed, photos, timesFetched) => {
  // RECEIVE_PHOTOS is dispatched when we've succesfully retrieved a new batch of photos from the API
  return {
    type: RECEIVE_PHOTOS,
    feed,
    photos,
    timesFetched: ++timesFetched
  }
}

export const fetchPhotos = (feed, timesFetched, feedOrEnd) => {
  return dispatch => {
    // First dispatch REQUEST_PHOTOS to load the spinner
    dispatch(requestPhotos(feedOrEnd));

    const apiURLs = {
      'cabin': 'https://api.imgur.com/3/gallery/r/CabinPorn/',
      'architecture': 'https://api.imgur.com/3/gallery/t/architecture/'
    }

    const url = apiURLs[feed];
    const clientID = 'Client-ID 4be88f0185b83d5';
    const headers = {
      'Authorization': clientID
    }

    return fetch(url, { headers })
    .then(res => {
      return res.json()
    })
    .then(data => {
      if (data.success) {
        let feedCards = [];

        // Here we parse out the next 10 photos
        let startIndex = timesFetched * 1;
        let endIndex = (timesFetched + 1) * 10;

        for (let i = startIndex; i < endIndex; i++) {
          // Cabin porn and #architecture have slightly different response object structures, so we account for that here
          let photo = (feed === 'cabin')
            ? data.data[i]
            : data.data.items[i]

          let cardData = {
            id: photo.id,
            uri: photo.link,
            description: photo.description,
            datetime: photo.datetime,
            views: photo.views,
            title: photo.title  // many of the photos don't have a description, so we'll render the titles for those guys
          }
          feedCards.push(cardData);
        }

        // Success! RECEIVE_PHOTOS increments timesFetched and stores our new photos in state
        dispatch(receivePhotos(feed, feedCards, timesFetched));
        // UPDATE_DATA_SOURCE will trigger a re-render of our UI
        dispatch(updateDataSource(feed, feedCards, feedOrEnd));
      } else {
        console.log('Uh oh, something went wrong! Got status code ' + res.status);
      }
    })
    .catch(err => {
      console.log('An error occurred: ' + err);
    })
  }
}

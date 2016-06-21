import {
  CHANGE_FEED,
  REQUEST_PHOTOS,
  RECEIVE_PHOTOS,
  UPDATE_DATA_SOURCE } from '../actions/photoFeed';
import { ListView }    from 'react-native';

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

const initialState = {
  selectedFeed: 'cabin',
  isFetchingOnFeedChange: true,
  isFetchingOnEndReached: false,
  timesFetched: 0,
  dataSource: dataSource,
  cabinCards: [],
  architectureCards: []
}

export default photoFeed = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FEED:
      return {
        ...state,
        selectedFeed: action.newFeed,
        timesFetched: 0
      }

    case REQUEST_PHOTOS:
      let isFetching = `isFetchingOn${action.feedOrEnd}`;
      return {
        ...state,
        [isFetching]: true
      };

    case RECEIVE_PHOTOS:
      let cardsArray = `${action.feed}Cards`;
      return {
        ...state,
        [cardsArray]: action.photos,
        timesFetched: action.timesFetched
      }

    case UPDATE_DATA_SOURCE:
      let fetching = `isFetchingOn${action.feedOrEnd}`;

      let newPhotos = [];
      newPhotos = [state.dataSource].slice();
      let newDataSource = newPhotos[0].cloneWithRows(action.photos);

      return {
        ...state,
        dataSource: newDataSource,
        [fetching]: false
      }

    default:
      return state;
  }
}

import { CHANGE_FEED, REQUEST_PHOTOS, RECEIVE_PHOTOS, UPDATE_DATA_SOURCE } from '../actions/photoFeed';
import { ListView } from 'react-native';

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

const initialState = {
  selectedFeed: 'cabin',
  isFetching: true,
  dataSource: dataSource,
  cabinCards: [],
  architectureCards: []
}

export default photoFeed = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FEED:
      return {
        ...state,
        selectedFeed: action.newFeed
      }
    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PHOTOS:
      let cardsArray = `${action.feed}Cards`;
      return {
        ...state,
        [cardsArray]: action.photos
      }
    case UPDATE_DATA_SOURCE:
      let newPhotos = [];
      newPhotos = [state.dataSource].slice();
      let newDataSource = newPhotos[0].cloneWithRows(action.photos);

      return {
        ...state,
        dataSource: newDataSource,
        isFetching: false
      }
    default:
      return state;
  }
}

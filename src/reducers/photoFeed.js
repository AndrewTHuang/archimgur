import { REQUEST_PHOTOS, RECEIVE_PHOTOS } from '../actions/photoFeed';

const initialState = {
  selectedFeed: 'cabin',
  cabinCards: [],
  architectureCards: []
}

export default photoFeed = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return state;
    case RECEIVE_PHOTOS:
      let cardsArray = `${action.feed}Cards`;

      return {
        ...state,
        [cardsArray]: action.photos
      }
    default:
      return state;
  }
}

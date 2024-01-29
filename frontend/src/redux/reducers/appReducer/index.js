import {
  LOADER,
  ERRMSG,
  SEARCHEDREST,
  CURRENTLOCATION,
  DRAWERPOSITION,
  AUTOMODALSHOW,
  ONBOARDING,
} from '../../constants';

const INITIAL_STATE = {
  loader: false,
  errMsg: '',
  searchedRest: [],
  currentUserLocation: null,
  drawerPosition: 'left',
  autoModalShow: false,
  
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADER_START':
      return {
        ...states,
        loader: true,
      };
    case 'LOADER_STOP':
      return {
        ...states,
        loader: false,
      };
    case LOADER:
      return {
        ...states,
        loader: action.payload,
      };
    case ERRMSG:
      return {
        ...states,
        errMsg: action.payload,
      };
    case SEARCHEDREST:
      return {
        ...states,
        searchedRest: action.payload,
      };
    case CURRENTLOCATION:
      return {
        ...states,
        currentUserLocation: action.payload,
      };
    case DRAWERPOSITION:
      return {
        ...states,
        drawerPosition: action.payload,
      };
    case AUTOMODALSHOW:
      return {
        ...states,
        autoModalShow: action.payload,
      };
  
    default:
      return states;
  }
};

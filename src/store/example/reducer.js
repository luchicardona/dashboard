import { TYPES } from './actions';

export default function(state = {}, { type, payload}) {
  switch (type) {
    case TYPES.FETCH_SUCCESS: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

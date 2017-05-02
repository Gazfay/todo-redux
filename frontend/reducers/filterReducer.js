import {TypeFilters, VISIBLE_FILTER} from '../constants/TodoConstants';


const initialState = TypeFilters.SHOW_ALL;

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case VISIBLE_FILTER: 
      return action.filter;

    default: 
      return state;
  }
}
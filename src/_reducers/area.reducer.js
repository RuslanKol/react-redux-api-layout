import { areaConstants } from "../_constants";

const initialState = {
    list: []
};

export const areas = (state = initialState, action) => {
  switch (action.type) {
    // GET AREAS
    case areaConstants.GET_AREAS:
      return {
        ...state,
        list:action.payload
      };
      default: 
        return {
            ...state
        };
  }
};
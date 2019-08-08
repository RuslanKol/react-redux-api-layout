import { laundryListConstants } from "../_constants";

const initialState = {
  list: [],
  // listItem: {}
};

export const laundryList = (state = initialState, action) => {
  switch (action.type) {
    // GET LAUNDRY LIST
    case laundryListConstants.GET_LAUNDRY_LIST_REQUEST:
      return {
        ...state
      };
    case laundryListConstants.GET_LAUNDRY_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload.data
      };
    case laundryListConstants.GET_LAUNDRY_LIST_ERROR:
      return {
        ...state
      };
    
    // GET LIST ITEM
    case laundryListConstants.GET_LAUNDRY_LIST_ITEM_REQUEST:
      return {
        ...state
      };
    case laundryListConstants.GET_LAUNDRY_LIST_ITEM_SUCCESS:
      return {
        ...state,
        listItem: action.payload.data
      };
    case laundryListConstants.GET_LAUNDRY_LIST_ITEM_ERROR:
      return {
        ...state
      };

    // GET PRICE TAB
    case laundryListConstants.GET_PRICE_TAB_REQUEST:
      return {
        ...state
      };
    case laundryListConstants.GET_PRICE_TAB_SUCCESS:
      return {
        ...state,
        priceTab: action.payload.data
      };
    case laundryListConstants.GET_PRICE_TAB_ERROR:
      return {
        ...state
      };

    // GET REVIEWS
    case laundryListConstants.GET_ITEM_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload
      }

    //GET PROVIDER ITEMS LIST
    case laundryListConstants.GET_PROVIDER_ITEMS_LIST_SUCCESS:
      return {
        ...state,
        providerItemsList: action.payload.data
      }
      
    default:
      return {
        ...state
      };
  }
};

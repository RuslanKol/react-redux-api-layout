import { userConstants } from "../_constants";

const initialState = {
  basket: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    // GET USER BY ID
    case userConstants.GET_USER_BY_ID_REQUEST:
      return {
        ...state
      };
    case userConstants.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userRole: action.payload.userRole,
        isAuth: true,
      };
    case userConstants.GET_USER_BY_ID_ERROR:
      return {
        ...state
      };

    // GET PROFILE
    case userConstants.GET_CUSTOMER: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        gender: action.payload.gender,
        goCreditBalance: action.payload.goCreditBalance,
      }
    }

    // UPDATE PROFILE
    case userConstants.UPDATE_CUSTOMER_PROFILE: {
      return {
        ...state
      }
    }

    // USER SIGN IN
    case userConstants.USER_SIGN_IN_REQUEST:
      return {
        ...state
      };
    case userConstants.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        userRole: action.payload.userRole,
        isAuth: true,
      }
    case userConstants.USER_SIGN_IN_ERROR:
      return {
        ...state
      }

    // GET USER CART
    case userConstants.GET_USER_CART: {
      return {
        ...state,
        basket: action.payload
      }
    }

    // GET USER CART COUNT
    case userConstants.GET_USER_CART_COUNT: {
      return {
        ...state,
        cartCount: action.payload
      }
    }

    // ADD TO BASKET
    case userConstants.ADD_TO_BASKET_REQUEST:
      return {
        ...state
      };
    case userConstants.ADD_TO_BASKET_SUCCESS:
      return {
        ...state,
        // basket: [...state.basket, action.payload]
      };
    case userConstants.ADD_TO_BASKET_ERROR:
      return {
        ...state
      };

    // UPDATE CART
    case userConstants.UPDATE_CART: {
      return {
        ...state
      }
    }

    // CHANGE EMAIL
    case userConstants.CHANGE_EMAIL: {
      return {
        ...state,
        notification: action.payload
      }
    }

    // GET ADDRESSES
    case userConstants.USER_GET_ADDRESS_SUCCESS: {
      return {
        ...state,
        address: action.payload.data
      }
    }
      

    // GET FAVOURITES
    case userConstants.GET_USER_FAVOURITES_REQUEST: {
      return {
        ...state
      }
    }
    case userConstants.GET_USER_FAVOURITES_ERROR: {
      return {
        ...state
      }
    }
    case userConstants.GET_USER_FAVOURITES_SUCCESS: {
      return {
        ...state,
        favourites: action.payload
      }
    }

    // DELETE FAVOURITE
    case userConstants.DELETE_USER_FAVOURITE_SUCCESS: {
      return {
        ...state,
        favourites: state.favourites.filter(e => Number(e.providerId) !== action.payload)
      }
    }

    // ADD FAVOURITE
    case userConstants.ADD_USER_FAVOURITE: {
      return {
        ...state,
      }
    }

    // CHANGE PASSWORD
    case userConstants.CHANGE_PASSWORD: {
      return {
        ...state
      }
    }

    // GET NOTIFICATIONS
    case userConstants.GET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.payload
      }
    }
      
    default:
      return {
        ...state
      };
      
  }
};

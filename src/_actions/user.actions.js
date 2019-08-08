import { userConstants } from "../_constants";
import { 
  signIn, 
  signUp, 
  changeEmail, 
  sendFeedback, 
  getAddress, 
  addItemsToCart,
  getAllCart,
  getUserById,
  getCartCount,
  updateCard,
  setDefaultAddress,
  addNewAddress,
  getFavourites,
  deleteFavourite,
  addFavourite,
  getCustomerById,
  updateCustomerProfile,
  changePassword,
  getNotifications,
  deleteNotification,
} from "../_api/user";
import axios from "axios";


// USER SIGN IN
export const userSignIn = (email, password) => dispatch => {
  dispatch({ type: userConstants.USER_SIGN_IN_REQUEST });
    signIn(email,password)
    .then(res => {
      axios.defaults.headers.common.Authorization ='Bearer '+res.headers.authorization;
      localStorage.setItem('authToken', res.headers.authorization);
      localStorage.setItem('userId', res.data.data.userId);
      dispatch({ 
        type: userConstants.USER_SIGN_IN_SUCCESS,
        payload: res.data.data 
      });
      dispatch(getUserFullCart(res.data.data.userId));
      dispatch(getUserFavouritesProviders(res.data.data.userId));
    })
    .catch(err => {
      dispatch({ type: userConstants.USER_SIGN_IN_ERROR });
      console.log(err.message);
    });

};

// USER SIGN UP
export const userSignUp = (email, password, mobile) => dispatch => {
  dispatch({ type: userConstants.USER_SIGN_UP_REQUEST });
  signUp(email, password, mobile)
    .then(data => {
      console.log(data.message);
      dispatch({ type: userConstants.USER_SIGN_UP_SUCCESS });
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: userConstants.USER_SIGN_UP_ERROR })
    })
}

// GET USER
export const getUser = (userToken, userId) => dispatch => {
  dispatch({ type: userConstants.GET_USER_BY_ID_REQUEST });
  axios.defaults.headers.common.Authorization ='Bearer '+userToken;
  getUserById(userId)
    .then(res => {
      dispatch({
        type: userConstants.GET_USER_BY_ID_SUCCESS,
        payload: res.data.data
      })
      dispatch(getUserFullCart(res.data.data.userId));
      dispatch(getUserFavouritesProviders(res.data.data.userId));
    })
    .catch(err => {
      dispatch({
        type: userConstants.GET_USER_BY_ID_ERROR
      })
    })
};

// GET CUSTOMER
export const getUserProfile = id => dispatch => {
  getCustomerById(id)
    .then(res => {
      dispatch({
        type: userConstants.GET_CUSTOMER,
        payload: res.data.data
      })
    })
    .catch(err => {})
}

// UPDATE CUSTOMER PROFILE
export const updateProfile = (firstName, lastName, mobile, userId, userEmail) => dispatch => {
  updateCustomerProfile(firstName, lastName, mobile, userId, userEmail)
    .then(() => {
      dispatch({
        type: userConstants.UPDATE_CUSTOMER_PROFILE
      })
      dispatch(getUserProfile(userId))
    })
    .catch(() => {})
}

// CHANGE PASSWORD
export const changeUserPassword = (currentPass, newPass) => dispatch => {
  changePassword(currentPass, newPass)
    .then(res => {
      dispatch({
        type: userConstants.CHANGE_PASSWORD,
      })
    })
    .catch(() => {})
}

// ADD TO BUSKET
export const addToBasket = data => dispatch => {
  dispatch({ type: userConstants.ADD_TO_BASKET_REQUEST });
  addItemsToCart(data)
    .then(res => {
      dispatch({
        type: userConstants.ADD_TO_BASKET_SUCCESS
      });
      dispatch(getUserFullCart(data["customerId"]));
    }) 
    .catch(err => {
      dispatch({
        type: userConstants.ADD_TO_BASKET_ERROR
      });
    })
};

// UPDATE CART
export const updateCartItem = data => dispatch => {
  updateCard(data)
    .then(res => {
      dispatch({
        type: userConstants.UPDATE_CART
      })
      dispatch(getUserFullCart(data["customerId"]));
    })
    .catch(err => {})
}

// GET BUSKET COUNT
export const getBusketItemsCount = id => dispatch => {
  getCartCount(id)
    .then(res => {
      dispatch({
        type: userConstants.GET_USER_CART_COUNT,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: userConstants.GET_USER_CART_COUNT,
        payload: 0
      })
    })
}

// USER CHANGE EMAIL
export const userChangeEmail = (newEmail) => dispatch => {
  dispatch({type: userConstants.CHANGE_EMAIL_REQUEST})
  changeEmail(newEmail)
    .then(res => {
      console.log(res.data.message);
      dispatch({
        type: userConstants.CHANGE_EMAIL_SUCCESS,
        payload: res.data.message
      })
    })
    .catch(err => {
      console.log(err.data.message);
      dispatch({
        type: userConstants.CHANGE_EMAIL_ERROR,
        payload: err.data.message
      })
    })
}

// SEND FEEDBACK 
export const contactSendFeedback = (enquiryType, comments) => dispatch => {
  sendFeedback(enquiryType, comments)
    .then(res => {
      dispatch({
        type: userConstants.USER_SEND_FEEDBACK,
        payload: res
      })
    })
    .catch(err => {
      console.log(err.data.message);
    })
}

// GET USER ADDRESSES
export const getUserAddresses = () => dispatch => {
  dispatch({ type: userConstants.USER_GET_ADDRESS_REQUEST })
  getAddress()
    .then(res => {
      dispatch({
        type: userConstants.USER_GET_ADDRESS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: userConstants.USER_GET_ADDRESS_ERROR
      })
    })
}

// ADD NEW ADDRESS
export const addNewUserAddress = data => dispatch => {
  dispatch({ type: userConstants.USER_ADD_ADDRESS_REQUEST })
  addNewAddress(data)
    .then(() => {
      dispatch({
        type: userConstants.USER_ADD_ADDRESS_SUCCESS
      })
    })
    .catch(() => {
      dispatch({
        type: userConstants.USER_ADD_ADDRESS_ERROR
      })
    })
}

// SET DEFAULT ADDRESS
export const setUserDefaultAddress = addressId => dispatch => {
  setDefaultAddress(addressId)
    .then(() => {
      dispatch({
        type: userConstants.USER_SET_DEFAULT_ADDRESS
      })
    })
    .catch(() => {})
}

// GET USER CART
export const getUserFullCart = id => dispatch => {
  getAllCart(id)
    .then(res => {
      dispatch({
        type: userConstants.GET_USER_CART,
        payload: res.data.data
      })
      dispatch(getBusketItemsCount(id));
    })
    .catch(err => {
      dispatch({
        type: userConstants.GET_USER_CART,
        payload: []
      })
      dispatch(getBusketItemsCount(id));
    })
}

//GET FAVOURITES
export const getUserFavouritesProviders = id => dispatch => {
  dispatch({ type: userConstants.GET_USER_FAVOURITES_REQUEST });
  getFavourites(id)
    .then((res) => {
      dispatch({
        type: userConstants.GET_USER_FAVOURITES_SUCCESS,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: userConstants.GET_USER_FAVOURITES_ERROR
      })
    })
}

// ADD FAVOURITE
export const addProviderToFavourite = providerId => dispatch => {
  addFavourite(providerId)
    .then(res => {
      dispatch({
        type: userConstants.ADD_USER_FAVOURITE
      })
    })
    .catch(() => {})
}

// DELETE FAVOURITE
export const deleteUserFavouriteProvider = providerId => dispatch => {
  console.log(providerId);
  dispatch({ type: userConstants.DELETE_USER_FAVOURITE_REQUEST })
  deleteFavourite(providerId)
    .then(res => {
      console.log(res);
      dispatch({
        type: userConstants.DELETE_USER_FAVOURITE_SUCCESS,
        payload: providerId
      })
    })
    .catch(err => {
      dispatch({
        type: userConstants.DELETE_USER_FAVOURITE_ERROR
      })
    })
}

// GET NOTIFICATIONS
export const getUserNotifications = data => dispatch => {
  getNotifications(data)
    .then(res => {
      dispatch({
        type: userConstants.GET_NOTIFICATIONS,
        payload: res.data.data
      })
    })
    .catch(() => {})
}

// DELETE NOTIFICATION
export const deleteUserNotification = id => dispatch => {
  deleteNotification(id)
    .then(() => {
      dispatch({
        type: userConstants.DELETE_NOTIFICATION
      })
    })
    .catch(() => {})
}
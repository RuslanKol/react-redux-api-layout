import { laundryListConstants } from "../_constants";
import { 
  getLaundryList, 
  getLaundryListItem, 
  getPriceTab,
  getItemReviews, 
  getProviderItems,
} from '../_api/laundryList';

import Img from "../images/laundry-list-item__title_img.png";
import Ico from "../images/laundry-list-item__title_icon.png";
import ItemImage from "../images/profile-item__image.png";

const list = [
  {
    id: 1,
    imageBg: Img,
    imageIco: Ico,
    name: "Al Mana Laundry Service",
    stars: 1,
    reviewsCount: 79,
    minOrder: 5.0,
    deliveryCharge: 5.0,
    paymentTypes: [
      {
        type: "GoCredit"
      },
      {
        type: "Cash"
      },
      {
        type: "Card"
      }
    ],
    services: [
      {
        type: "iron"
      },
      {
        type: "dress"
      }
    ],
    dropdownItems: [
      {
        id: 1,
        name: "Traditional",
        items: [
          {
            id: 1,
            image: ItemImage,
            number: 8,
            name: "Dishdasha ( Summer )",
            price: 15,
            services: [
              {
                id: 1,
                name: "Dry Clean",
                description: "Dry clean, iron and hang",
                cost: 5
              },
              {
                id: 2,
                name: "Wash + Iron",
                description: "Dry clean, iron and hang",
                cost: 5
              },
              {
                id: 3,
                name: "Ironing",
                description: "Dry clean, iron and hang",
                cost: 5
              }
            ]
          }
        ]
      }
    ],
    priceItems: [
      {
        id: 1,
        name: "Traditional",
        items: [
          {
            id: 1,
            name: "Dishdasha ( Summer )",
            services: [
              {
                id: 1,
                name: "Curtains",
                time: "10:00"
              },
              {
                id: 2,
                name: "Abayas",
                time: "10:00"
              },
              {
                id: 3,
                name: "Kids",
                time: "10:00"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Traditional",
        items: [
          {
            id: 1,
            name: "Dishdasha ( Summer )",
            services: [
              {
                id: 1,
                name: "Curtains",
                time: "10:00"
              },
              {
                id: 2,
                name: "Aba585858yas",
                time: "10:00"
              },
              {
                id: 3,
                name: "Kids",
                time: "10:00"
              }
            ]
          }
        ]
      }
    ]
  }
];

//  GET LAUNDRY LIST BY AREA
export const getList = (area) => dispatch => {
  dispatch({ type: laundryListConstants.GET_LAUNDRY_LIST_REQUEST });
  getLaundryList(area)
    .then(res => {
      dispatch({
        type: laundryListConstants.GET_LAUNDRY_LIST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: laundryListConstants.GET_LAUNDRY_LIST_ERROR
      });
    })
};

// GET ITEM INFO BY ID
export const getListItem = id => dispatch => {
  dispatch({ type: laundryListConstants.GET_LAUNDRY_LIST_ITEM_REQUEST });
  getLaundryListItem(id)
    .then(res => {
      dispatch({
        type: laundryListConstants.GET_LAUNDRY_LIST_ITEM_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: laundryListConstants.GET_LAUNDRY_LIST_ITEM_ERROR
      });
    })
};

// GET ITEMS LIST IN PROVIDER
export const getProviderItemsList = id => dispatch => {
  dispatch({type: laundryListConstants.GET_PROVIDER_ITEMS_LIST_REQUEST})
  getProviderItems(id)
    .then(res => {
      dispatch({
        type: laundryListConstants.GET_PROVIDER_ITEMS_LIST_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: laundryListConstants.GET_PROVIDER_ITEMS_LIST_ERROR
      })
    })
}

// GET PRICE TABS
export const getPriceTabInfo = id => dispatch => {
  dispatch({ type: laundryListConstants.GET_PRICE_TAB_REQUEST });
  getPriceTab(id)
    .then(res => {
      dispatch({
        type: laundryListConstants.GET_PRICE_TAB_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: laundryListConstants.GET_PRICE_TAB_ERROR
      });
    })
}

// GET REVIEWS
export const getReviews = itemId => dispatch => {
  dispatch({ type: laundryListConstants.GET_ITEM_REVIEWS_REQUEST });
  getItemReviews(itemId)
    .then(res => {
      dispatch({
        type: laundryListConstants.GET_ITEM_REVIEWS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: laundryListConstants.GET_ITEM_REVIEWS_ERROR,
      })
    })
}

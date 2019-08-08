import axios from "axios";

// LOGIN
export function signIn(email, password) {
  return axios.post("http://18.191.41.196:3001/auth/login", {
    userName: email,
    password: password,
  });
}

// GET USER
export function getUserById(userId) {
  return axios.get(`http://18.191.41.196:3001/users/${userId}`);
}

// Sign UP
export function signUp(email, password, mobile) {
  return axios.post("http://18.191.41.196:3001/users/CreateUser", {
    userName: email,
    password: password,
    mobile: mobile,
    userRole: "NOR",
  });
}

// GET PROFILE
export function getCustomerById(id) {
  return axios.get(`http://18.191.41.196:3001/customer/${id}`)
}

// UPDATE PROFILE
export function updateCustomerProfile(firstName, lastName, mobile, userId, userEmail) {
  return axios.post("http://18.191.41.196:3001/customer/updateCustomer", {
    customerId: userId,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    "customerType":"NOR",
    "work address":"Kuravamkonam",
    "home address":"Kuravamkonam",
    "other address":"",
    phone: `${mobile}`,
    email: `${userEmail}`
  })
}

// GET USER CART
export function getAllCart(id) {
  return axios.get(`http://18.191.41.196:3001/cart/${id}`)
}

// GET USER CART COUNT
export function getCartCount(id) {
  return axios.get(`http://18.191.41.196:3001/cart/GetCartCount/${id}`)
}

//ADD TO CART
export function addItemsToCart(data) {
  return axios.post("http://18.191.41.196:3001/cart/CreateCart", data)
}

// UPDATE CART
export function updateCard(data) {
  return axios.put("http://18.191.41.196:3001/cart/UpdateCart", data)
}

// CHANGE EMAIL
export function changeEmail(newEmail) {
  return axios.put("http://18.191.41.196:3001/users/updateUserEmail", {
    emailId: newEmail
  });
}

// CHANGE PASSWORD
export function changePassword(currentPass, newPass) {
  return axios.post("http://18.191.41.196:3001/auth/changePassword", {
    currentPassword: currentPass,
    newPassword: newPass
  })
}

// SEND FEEDBACK
export function sendFeedback(enquiryType, comments) {
  return axios.post("http://18.191.41.196:3001/customer/sendFeedback/", {
    enquiryType: enquiryType,
    comments: comments
  })
}

// GET USER ADDRESSES
export function getAddress() {
  return axios.post("http://18.191.41.196:3001/customer/getAddress/")
}

// ADD NEW ADDRESS
export function addNewAddress(data) {
  console.log(data);
  return axios.post("http://18.191.41.196:3001/customer/addAddress", {
    "address": {
      "line1": data.line1,
      "line2": data.line2,
      "line3": data.line3,
      "line4": data.line4,
      "line5": data.line5,
      "line6": data.line6,
      "line7": data.line7,
      "line8": data.line8,
      "type":"Work"
    }
  })
}

// SET DEFAULT ADDRESS
export function setDefaultAddress(addressId) {
  return axios.post("http://18.191.41.196:3001/customer/setDefaultAddress", {
    addressId: addressId 
  })
}

// GET FAVOURITES
export function getFavourites(id) {
  return axios.get(`http://18.191.41.196:3001/customer/getFavouriteProviders/${id}`)
}

// ADD FAVOURITE
export function addFavourite(providerId) {
  return axios.post("http://18.191.41.196:3001/customer/addFavouriteProviders/", {
    provider: providerId
  })
}

// DELETE FAVOURITE
export function deleteFavourite(providerId) {
  return axios.delete("http://18.191.41.196:3001/customer/deleteFavouriteProviders", {
    providerId: providerId
  })
}

// GET NOTIFICATIONS
export function getNotifications(data) {
  return axios.post("http://18.191.41.196:3001/customer/GetNotifications", data)
}

// DELETE NOTIFICATION
export function deleteNotification(id) {
  return axios.post("http://18.191.41.196:3001/customer/updateNotifications", {
    notificationId: id,
    status:"READ"
  })
}
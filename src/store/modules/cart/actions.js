export function addToCartRequest(id) {
  return {
    type: "@cart/ADD_REQUEST",
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: "@cart/ADD_SUCCESSS",
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: "@cart/REMOVE",
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    id,
    amount,
  };
}

export function finishRequest() {
  return {
    type: "@cart/FINISH_REQUEST",
  };
}
export function finishSuccess() {
  return {
    type: "@cart/FINISH_SUCCESS",
  };
}
export function logoutRequest() {
  return {
    type: "@cart/LOGOUT_REQUEST",
  };
}
export function logoutSuccess() {
  return {
    type: "@cart/LOGOUT_SUCCESS",
  };
}

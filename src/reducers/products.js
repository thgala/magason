const defaultState = [];

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.res.data
    default:
      return state
  }
}
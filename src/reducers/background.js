const defaultState = {
  isBackdropActive: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'BACKDROP_TRIGGER':
      return Object.assign({}, state, {
        isBackdropActive: !state.isBackdropActive
      })
    default:
      return state
  }
}
const defaultState = {
  isMenuOpen: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'MENU_TRIGGER':
      return Object.assign({}, state, {
        isMenuOpen: action.data
      })
    default:
      return state
  }
}
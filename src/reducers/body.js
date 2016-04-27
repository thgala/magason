const defaultState = {
  isOverflowed: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'BODY_OVERFLOW_TRIGGER':
      return Object.assign({}, state, {
        isOverflowed: !state.isOverflowed
      })
    default:
      return state
  }
}
export default function PropertyListReducer(state = { list: [] }, action) {
    switch (action.type) {
      case 'PROPERTY_LIST':
        return {
          ...state,
          list: [...state.list, action.data] // Add the new item to the existing list
        };
      default:
        return state;
    }
  }
  
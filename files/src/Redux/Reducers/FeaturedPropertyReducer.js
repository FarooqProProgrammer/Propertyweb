export default function FeaturedPropertyReducer(state = { list: [] }, action) {
    switch (action.type) {
      case 'SET_FEATURED_PROEPRTY':
        return {
          ...state,
          list: [...state.list, action.data] // Add the new item to the existing list
        };
      default:
        return state;
    }
  }
  